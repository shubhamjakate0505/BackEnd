const express=require("express");
const app=express();
const port=8080;
app.set("view engin","ejs");
app.get("/",(req,res)=>{
    res.send("here is the Response")
})
app.listen(port,()=>{
    console.log(`Listing at the port ${port}`);
})