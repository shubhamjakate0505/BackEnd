const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express=require("express")
const path=require("path")

const app=express();
const port=8080;
const methodoverride=require("method-override")
app.use(methodoverride("_method"));
app.use(express.urlencoded({extended : true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));


// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'student',
  password:'ShubhamJakate@0505'
});


let getrandomuser=()=> {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}
/* 
let q="insert into user(id,usename,email,password)values?";


let data=[];
  for(i=1;i<=100;i++){
    data.push(getrandomuser());
  }
 */
//Home Route
app.get("/",(req,res)=>{
  let q='select count(*) from user';
  try{
    connection.query(q,(err,result)=>{
    if(err) throw err;
    let count=result[0]["count(*)"]
    res.render("home.ejs",{count});
    })
  }catch(err){
    console.log(err)
    res.send("Some error in databases");
  }
  
})

//Show Route

app.get("/user",(req,res)=>{
  let q="select * from user";
  try{
    connection.query(q,(err,result)=>{
    if(err) throw err;
   
    res.render("user.ejs",{result});
    })
  }catch(err){
    console.log(err)
    res.send("Some error in databases");
  }

})

app.get("/user/:id/edit",(req,res)=>{
  let {id}=req.params;
  let q=`select * from user where id='${id}'`
  try{
    connection.query(q,(err,result)=>{
    if(err) throw err;
    let user=result[0];
    res.render("Edit.ejs",{user});
  })
  }catch(err){
    console.log(err)
    res.send("Some error in databases");
  }
  
})  

//Edit Route

app.patch("/user/:id",(req,res)=>{
  let {id}=req.params;
  let {password:formpass,usename:userpass}=req.body;
  let q=`select * from user where id='${id}'`
  try{
    connection.query(q,(err,result)=>{
    if(err) throw err;
    let user=result[0];
    if(formpass!=user.password){
     res.send("worng pass");
    }else{
      let q2=`update user set usename='${userpass}' where id='${id}'`
      connection.query(q2,(err,result)=>{
        if(err) throw err;
        res.redirect("/user");

      })
      // res.send(user);
    }
    
   
  })
  }catch(err){
    console.log(err)
    res.send("Some error in databases");
  }
  // res.send("Working Good");
})

app.listen(port,()=>{
  console.log(`Server is Running on the port ${port}`)
})

/* try{
  connection.query(q,[data],(err,result)=>{
  if(err) throw err;
  console.log(result)
  })
}catch(err){
  console.log(err)
}

connection.end();
 */











  