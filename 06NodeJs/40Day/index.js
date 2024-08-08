const express=require('express')
const connection=require('./db/connection')
const User=require('./model/userModel')
const Task=require('./model/taskModel')
const Movies=require('./model/moviesModel')
const app=express()
const PORT=3000
connection()
app.use(express.json())

const movieData=new Movies({
    movieName:'RRR007',
    movieSummary:'RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.',
    // movieRating:8.8,
    moviePoster:'https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG',
    movieTrailer:'https://www.youtube.com/embed/f_vbAtFSEc0'
})



movieData.save()

//CRUD

//READ
app.get('/',(req,res)=>{
    res.send("Hello Express")
})

app.get('/users',async(req,res)=>{
// we want data from db
// db.users.find({})
// Model.find({})  >> mongoose 
    const getAllUsers=await User.find({})
    res.send(getAllUsers)
})

app.get('/task',async(req,res)=>{
    const getAllTask=await Task.find({})
    res.send(getAllTask)
})

app.get('/movies',async(req,res)=>{
    const getAllMovies=await Movies.find({})
    res.send(getAllMovies)
})

//POST 
app.post('/adduser',async(req,res)=>{
    //request > req
    console.log(req.body)
    const userData=new User(req.body)
    userData.save()
    res.send(userData)
})

app.post('/addtask',async(req,res)=>{
    const taskData=new Task(req.body)
    taskData.save()
    res.send(taskData)
    
})
// movies

//edit > get by id /:id
//users
app.get('/users/:id',async(req,res)=>{
    // req.query
    // req.params 
    console.log(req.params.id)
    //db.users.find({_id:req.params.id})// Object_id
    // const getUser=await User.find({_id:req.params.id})
    const getUser=await User.findById(req.params.id)
    res.send(getUser)

}) 

app.get('/task/:id',async(req,res)=>{
    const getTask=await Task.findById(req.params.id)
    res.send(getTask)
})

//movies
//delete Method
app.delete('/users/:id',async(req,res)=>{
    const deleteUser=await User.findByIdAndDelete(req.params.id)
    res.send({
        deletedUser:deleteUser,
        message:"User Deleted Successfully"

    })
})

app.delete('/task/:id',async(req,res)=>{
    const deleteTask=await Task.findByIdAndDelete(req.params.id)
    res.send({
        deletedTask:deleteTask,
        message:"Task Deleted Successfully and cannot be found in DB"
    })
})
//movies

//update > PUT/PATCH > IDs
app.put('/users/:id',async(req,res)=>{
    //req.query
    //req.params
    //req.body
    //{new:true,runValidators:true}>> we want to update in first call 
    //>>  //req.params  //req.body
    const updateUser=await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    res.send(updateUser)

})
// task
app.put('/task/:id',async(req,res)=>{
    const updateTask=await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    res.send(updateTask)
})

//movies +10+5 



app.listen(PORT,()=>{
    console.log("Server Started at Port No",PORT)
})

