const mongoose=require('mongoose')

const taskSchema=mongoose.Schema({
    taskName:{type:String},
    desc:{type:String},
    priorty:{type:String},
    completed:{type:Boolean},
    owner:{
            type:mongoose.Schema.Types.ObjectId,// _id >> Object Id 
            required:true,
            ref:'User' //Model Name
        }
})
const Task=mongoose.model("Task",taskSchema)
module.exports=Task
// added a owner feild >> its a mandatory feild , this will take object_id of user which are created
// relationship between user and the task 