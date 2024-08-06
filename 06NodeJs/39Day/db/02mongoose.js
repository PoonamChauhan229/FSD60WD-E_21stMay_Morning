// import mongoose                 >require('mongoose')
// connect to db                   >connect()
// create collection + schema      >model()
// create the data                 >new ModelName({})                                  
// save/insert the data to db      >save()
// terminal                        >node 02mongoose.js

// task collection
// schema >>
// desc         string
// taskName     string 
// priorty      string
// completed    boolean   || true  

// 12 min >>> 11:11 ||  11:25

const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/fsd60wd_01_mongoose')
// mongodb >> doesnt create empty database
// create db >> u need to have collection

//create an collection
// desc         string
// taskName     string 
// priorty      string
// completed    boolean   || true 

//const collectionName=mongoose.model("collectionName",{schema})
// user Model
const Task=mongoose.model("Task",{
    taskName:{type:String},
    desc:{type:String},
    priorty:{type:String},
    completed:{type:Boolean}
})

// insert the data in db in Task Collection/Model
// new keyword
const taskData=new Task({
    taskName:"Day01 Task",
    desc:"Javacscript task",
    priorty:"High",
    completed:true
})

//save to DB
// save()
//TaskData.save()
//.then() 

//async await
const connection=async()=>{
const res=await taskData.save()
console.log(res,"We are connected to Mongodb....")
}
connection()

