const mongoose=require('mongoose')

const taskSchema=mongoose.Schema({
    taskName:{type:String},
    desc:{type:String},
    priorty:{type:String},
    completed:{type:Boolean}
})
const Task=mongoose.model("Task",taskSchema)
module.exports=Task