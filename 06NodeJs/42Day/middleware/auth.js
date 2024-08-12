//
const jwt=require('jsonwebtoken')
const User=require('../model/userModel')

const auth=async(req,res,next)=>{
// will taken 
// console.log(req.header('Authorization').replace("Bearer ",""))
const token=req.header('Authorization').replace("Bearer ","")
// we need to verify this with secret key >>>nodejs
const decoded=jwt.verify(token,'nodejs')
console.log(decoded)    
const user=await User.findOne({_id:decoded._id})
// console.log(user)
// console.log(token)
req.token=token,
req.user=user

next()
}
module.exports=auth


//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmI1YWUyYzAxMmYxZDI4NDM3OWVmZjIiLCJpYXQiOjE3MjM0NDA2MDN9.vBPY9Z8_3TviAYn_xTNKhPqDjqbEExuK_bQ6kU6-Na0
// Bearer Token