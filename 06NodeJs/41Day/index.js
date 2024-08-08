const express=require('express')
const connection=require('./db/connection')
const userRouter=require('./routes/userRoutes')
const taskRouter=require('./routes/taskRoutes')
const app=express()
const PORT=3000
connection()
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

//READ
app.get('/',(req,res)=>{
    res.send("Hello Express")
})

app.listen(PORT,()=>{
    console.log("Server Started at Port No",PORT)
})

