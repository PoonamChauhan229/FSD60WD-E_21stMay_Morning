const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')
// schema
// new mongoose.Schema({})
const userSchema=new mongoose.Schema({
    name:{type:String},
    age:{type:Number},
    email:{type:String,required:true,lowercase:true,trim:true},// mandatory feild
    phone_number:{type:Number,default:0},
    password:{type:String,required:true}
})

// userSchema   >> genrateToken
userSchema.methods.generateToken=async function(req,res,next){
    const user=this
    const token=jwt.sign({_id:user._id},"nodejs")
    //console.log(token)
    return token
   
}


const User=mongoose.model("User",userSchema)

module.exports=User