const mongoose = require('mongoose');

main().then(()=>{
    console.log("connection Sucessfully");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
let userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});
const User=mongoose.model("User",userSchema);
User.find().then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err);
})

// const Emp=mongoose.model("Emp",userSchema);

/* const user2=new User({
    name:"rahul",
    email:"ashwinijakate0505@gmail.com",
    age:32
});

User.insertMany([{
    name:"Gita",
    email:"ashwinijakate0505@gmail.com",
    age:32  
},
{
    name:"sanju",
    email:"ashwinijakate0505@gmail.com",
    age:32  
}]
).then((data)=>{
    console.log(data);
})
 */// user2.save()