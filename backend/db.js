const express=require("express")
const Collection=require("./mongo")
const cors=require("cors")
const app=express()
app.use(express.json())
const axios=require('axios')
app.use(express.urlencoded({extended:true}))
app.use(cors())

async function retrieveData() {
    try {
      // Perform a query to retrieve the posted data
      const entries = await Collection.find({});
  
      console.log('Posted values:');
      entries.forEach(entry => {
        console.log(entry);
      });
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  }




app.post("/submit",async(req,res)=>{
   const {bookname,authorname,genre}=req.body
   try{
    const entry=new Collection({bookname,authorname,genre});
    await entry.save();
    retrieveData();
    res.send('Form submitted successfully');
   }
   catch(error){
    console.error(error);
    res.status(500).send('An error occurred');
   }
   
    
})

app.get('/get',async(req,res)=>{
    try{
        const data=await Collection.find();
        res.json(data);
    }
    catch(error){
        console.error('Error',error);
        res.status(500).send('An error occured');
    }
});
 

app.listen(8000,()=>{
    console.log("port connected")
})