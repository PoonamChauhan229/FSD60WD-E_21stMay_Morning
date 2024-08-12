const mongoose=require('mongoose')
const connection=async()=>{
    await mongoose.connect(process.env.MONGO_URL)
    console.log("We are connected to Mongodb")
}
// connection()
module.exports=connection

// node express mongodb >> together
// index.js