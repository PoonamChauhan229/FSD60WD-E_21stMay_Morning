const Task=require('../model/taskModel')
const express=require('express')
const router=express.Router()

router.get('/task',async(req,res)=>{
    const getAllTask=await Task.find({})
    res.send(getAllTask)
})   


//POST 
router.post('/addtask',async(req,res)=>{
    const taskData=new Task(req.body)
    taskData.save()
    res.send(taskData)
    
})

//edit > get by id /:id
router.get('/task/:id',async(req,res)=>{
    const getTask=await Task.findById(req.params.id)
    res.send(getTask)
})


//update > PUT/PATCH > IDs
router.put('/task/:id',async(req,res)=>{
    const updateTask=await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    res.send(updateTask)
})

//delete Method     
router.delete('/task/:id',async(req,res)=>{
    const deleteTask=await Task.findByIdAndDelete(req.params.id)
    res.send({
        deletedTask:deleteTask,
        message:"Task Deleted Successfully and cannot be found in DB"
    })
})

module.exports=router
