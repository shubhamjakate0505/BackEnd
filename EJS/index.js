const express=require("express");
const path=require("path")
const app=express();
const port=8080;


app.use(express.static(path.join(__dirname,"public")));
app.get("/serch",(req,res)=>{
    res.send("Search Page")
    // console.log("");
})
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"/views"))
app.get("/",(req,res)=>{
    res.render("home");
})
app.get("/roll",(req,res)=>{
    let dis= Math.floor(Math.random()*10);

    res.render("rolldice.ejs",{num:dis})
})

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const instadata=require("./data.json")
    const data=instadata[username]
    console.log(data);
    // console.log(data)
    res.render("instagram",{data})
    // console.log(username);
})

app.use((req,res)=>{
    console.log("Request was Received")
    res.send("this is Response")
})

app.listen(port,()=>{
    console.log(`Listing on the port ${port}`);
})