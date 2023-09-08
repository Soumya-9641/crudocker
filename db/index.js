const mongoose = require('mongoose');
// const MONGO_URI= process.env.MONGO;
// const DB = MONGO_URI
//const DB = "mongodb://mongo:27017/cinema";



 const db =mongoose.connect(process.env.MONGO,{
  useNewUrlParser:true,
  useUnifiedTopology: true
}).then(()=>{
  console.log(`connection successfull`)
}).catch((err)=>{
  console.log("no connection")
})
module.exports=db;