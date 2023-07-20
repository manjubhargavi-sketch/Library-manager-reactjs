const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/library")
.then(()=>{
  console.log("mongodb connected");
}).catch(()=>{
    console.log('failed');
})  

const newSchema=new mongoose.Schema({
    id:{
        type:String,
    
        unique:true
         
    },
    bookname:{
        type:String,
        required:true
    },
    authorname:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    }
});

const Collection=mongoose.model("Collection",newSchema)
module.exports=Collection