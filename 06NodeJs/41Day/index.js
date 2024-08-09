const express=require('express')
const connection=require('./db/connection')
const userRouter=require('./routes/userRoutes')
const taskRouter=require('./routes/taskRoutes')
const dotenv=require('dotenv')
const cors=require('cors')
dotenv.config()
// console.log(process.env.PORT)
// console.log(process.env.MONGO_URL)
const app=express()
app.use(cors())

const PORT=process.env.PORT
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

// 5173    >>>>>>>>>     3000
// cors enable