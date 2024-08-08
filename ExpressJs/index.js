const express = require('express')
const app = express();
const port=8080;

app.get('/search',(req, res)=> {
  res.send('Hello World')
})
app.get('*',(req,res)=>{
    res.send("Page not Founnd")
})

app.use((req,res)=> {
    console.log("Received Response");
    res.send("Here is your Response");

})


app.listen(8080,()=>{
    console.log(`Listeing on the port ${port}`);
})