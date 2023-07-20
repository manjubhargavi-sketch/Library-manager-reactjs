const express=require("express")
const collection=require("../../backend/mongo")
const cors=require("cors")
const app=express()
app.use(express.json)
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.post("/",async(req,res)=>{
   const {bookname}=req.body

   const bname={
    bookname:bookname
   }
await collection.insertMany([bname])

})
app.listen(8000,()=>{
    console.log("port connected")
})