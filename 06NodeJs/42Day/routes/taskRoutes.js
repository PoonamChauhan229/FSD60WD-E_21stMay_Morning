const Task=require('../model/taskModel')
const express=require('express')
const router=express.Router()
const auth=require('../middleware/auth')


//POST 
router.post('/addtask',auth,async(req,res)=>{
    console.log(req.user)
    try{
     const taskData=new Task({
        ...req.body,
        owner:req.user._id
     })
     await taskData.save()
     res.send(taskData)
    }catch(e){
     res.send("Some internal error")
 }     
 })


router.get('/task',auth,async(req,res)=>{
   try{
    // populate()
    await req.user.populate('taskRel')
    res.send(req.user.taskRel)
   }catch(e){
    res.send("Some internal error")
    }
   
})   

//edit > get by id /:id
router.get('/task/:id',auth,async(req,res)=>{
    console.log
   try{
    const getTaskId=await Task.findOne({_id:req.params.id,owner:req.user._id})
    res.send(getTaskId)
   }
    catch(e){
        res.send("Some internal error")
    }
})


//update > PUT/PATCH > IDs
router.put('/task/:id',auth,async(req,res)=>{
    try{
    const updateTask=await Task.findOneAndUpdate({_id:req.params.id,owner:req.user._id},req.body,{new:true,runValidators:true})
    res.send(updateTask)
    } catch(e){
        res.send("Some internal error")
    }
})

//delete Method   
//findOneAndDelete   >>  15 min
router.delete('/task/:id',auth,async(req,res)=>{
   try{
    const deleteTask= await Task.findOneAndDelete({_id:req.params.id, owner:req.user._id})   
    if(deleteTask){
    res.send({
        deletedTask:deleteTask,
        message:"Task Deleted Successfully and cannot be found in DB"
    })
    }
    res.send({message:"Task not found"})
   }catch(e){
    res.send("Some internal error")
   }
})

module.exports=router
