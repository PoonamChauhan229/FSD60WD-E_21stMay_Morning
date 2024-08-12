const Task=require('../model/taskModel')
const express=require('express')
const router=express.Router()

router.get('/task',async(req,res)=>{
   try{
    const getAllTask=await Task.find({})
    res.send(getAllTask)
   }catch(e){
    res.send("Some internal error")
    }
   
})   


//POST 
router.post('/addtask',async(req,res)=>{
   try{
    const taskData=new Task(req.body)
    taskData.save()
    res.send(taskData)
   }catch(e){
    res.send("Some internal error")
}
    
})

//edit > get by id /:id
router.get('/task/:id',async(req,res)=>{
   try{
    const getTask=await Task.findById(req.params.id)
    res.send(getTask)
   }
    catch(e){
        res.send("Some internal error")
    }
})


//update > PUT/PATCH > IDs
router.put('/task/:id',async(req,res)=>{
    try{
        const updateTask=await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    res.send(updateTask)
    } catch(e){
        res.send("Some internal error")
    }
})

//delete Method     
router.delete('/task/:id',async(req,res)=>{
   try{
    const deleteTask=await Task.findByIdAndDelete(req.params.id)
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
