const User=require('../model/userModel')
const express=require('express')
const router=express.Router()
//GET 
router.get('/users',async(req,res)=>{
    // we want data from db
    // db.users.find({})
    // Model.find({})  >> mongoose 
        const getAllUsers=await User.find({})
        res.send(getAllUsers)
})
    
//POST 
router.post('/adduser',async(req,res)=>{
    //request > req
    console.log(req.body)
    const userData=new User(req.body)
    userData.save()
    res.send(userData)
})

//edit > get by id /:id
//users
router.get('/users/:id',async(req,res)=>{
    // req.query
    // req.params 
    console.log(req.params.id)
    //db.users.find({_id:req.params.id})// Object_id
    // const getUser=await User.find({_id:req.params.id})
    const getUser=await User.findById(req.params.id)
    res.send(getUser)

}) 
    
//update > PUT/PATCH > IDs
router.put('/users/:id',async(req,res)=>{
    //req.query
    //req.params
    //req.body
    //{new:true,runValidators:true}>> we want to update in first call 
    //>>  //req.params  //req.body
    const updateUser=await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    res.send(updateUser)

})

//delete Method
router.delete('/users/:id',async(req,res)=>{
    const deleteUser=await User.findByIdAndDelete(req.params.id)
    res.send({
        deletedUser:deleteUser,
        message:"User Deleted Successfully"

    })
})

module.exports=router

    
    