const mongoose=require('mongoose')
// schema
// new mongoose.Schema({})
const userSchema=new mongoose.Schema({
    name:{type:String},
    age:{type:Number},
    email:{type:String,required:true,lowercase:true,trim:true},// mandatory feild
    phone_number:{type:Number,required:true,default:0},
    password:{type:String,required:true}
})

const User=mongoose.model("User",userSchema)

module.exports=User