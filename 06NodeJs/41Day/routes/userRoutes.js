const User=require('../model/userModel')
const express=require('express')
const router=express.Router()
//GET 
router.get('/users',async(req,res)=>{
    // we want data from db
    // db.users.find({})
    // Model.find({})  >> mongoose 
    //try catch
    try{
        const getAllUsers=await User.find({})
        res.send(getAllUsers)
    }catch(e){
        res.send("Users not found",e)
    }
})
    
//POST 
router.post('/adduser',async(req,res)=>{
    //request > req
    // console.log(req.body)
    try{
        const userData=new User(req.body)
        userData.save()
        res.send(userData)
    }catch(e){
        res.send("Some internal error")
    }
})

//edit > get by id /:id
//users
router.get('/users/:id',async(req,res)=>{
    // req.query
    // req.params 
    //console.log(req.params.id)
    //db.users.find({_id:req.params.id})// Object_id
    // const getUser=await User.find({_id:req.params.id})
    try{
        const getUser=await User.findById(req.params.id)
    res.send(getUser)
    }catch(e){
        res.send("Some internal error")
    }

}) 
    
//update > PUT/PATCH > IDs
router.put('/users/:id',async(req,res)=>{
    //req.query
    //req.params
    //req.body
    //{new:true,runValidators:true}>> we want to update in first call 
    //>>  //req.params  //req.body
   try{
        const updateUser=await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        res.send(updateUser)
   }catch(e){
    res.send("Some internal error")
}

})

//delete Method
router.delete('/users/:id',async(req,res)=>{
    try{
        const deleteUser=await User.findByIdAndDelete(req.params.id)
        console.log(deleteUser)
            if(deleteUser){                    
                res.send({
                    deletedUser:deleteUser,
                    message:"User Deleted Successfully"

                })
            }
            res.send({message:"User Not found"})
                
        }        
    catch(e){
        res.send("Some internal Error")
    }
})

module.exports=router

    
    