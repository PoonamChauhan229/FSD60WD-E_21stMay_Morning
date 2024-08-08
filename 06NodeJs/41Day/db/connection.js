const mongoose=require('mongoose')
const connection=async()=>{
    await mongoose.connect('mongodb://localhost:27017/fsd60wd_01_mongoose')
    console.log("We are connected to Mongodb")
}
// connection()
module.exports=connection

// node express mongodb >> together
// index.js