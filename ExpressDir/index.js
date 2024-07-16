const express = require('express')
const app=express();//function 
const port=3000;

/* app.use((req,res)=>{
    console.log("Request Received")
    res.send("this is  a response");
})
 */

app.get("/",(req,res)=>{
    res.send("u send an res on home page")
})
app.get("/home",(req,res)=>{
    res.send("hey")
})
app.listen(3000,()=>{
    console.log(`Sever is listing on port ${port}`);
})
