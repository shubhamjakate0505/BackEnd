# Mongodb - data is stored in Bson formate
 * cmd
1. mongosh -Start the Server
2. use db_name
3. show dbs;
3. use college - to create or use college database
4. db -currant database shows;

# collection
1. Document : -Mongo stores data in the form of Document(Bson doc)
2. collections:- MongoDB stores document in collections
 
# Insertion
- link-https://www.mongodb.com/docs/manual/reference/
- show collections(tables);
- db.student.insertOne({name:"adam",marks:79});
- db.student.find()// show all data
- db.student.insertMany([{},{}]);

# To Find for specific value
- db.student.find({key:value});

# Oprators

- link -https://www.mongodb.com/docs/manual/reference/operator/aggregation/
- db.student({age:{$gt:22}});

# mongoose package
- mongoosejs.com
- npm i mongoose
# Stpes to Establish Connections

1. 

  const mongoose = require('mongoose');

   main().then(()=>{
     console.log("connection Sucessfully");
   })
  .catch(err => console.log(err));

  async function main() {
   await mongoose.connect('mongodb://127.0.0.1:27017/test');
 }

 2. Define Schema

    let userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
    });