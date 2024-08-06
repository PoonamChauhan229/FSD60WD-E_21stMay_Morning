const mongoose=require('mongoose')
// connect mongodb with nodejs
// mongoose.connect()
mongoose.connect('mongodb://127.0.0.1:27017/fsd60wd_01_mongoose')
// mongodb >> doesnt create empty database
// create db >> u need to have collection

//create an collection
// users >> name and age
// name > datatype
// age  > datatype
// schema ===> mockapi + yup 

//const collectionName=mongoose.model("collectionName",{schema})
// user Model
const User=mongoose.model("User",{
    name:{type:String},
    age:{type:Number},
    email:{type:String,required:true,lowercase:true,trim:true},// mandatory feild
    phone_number:{type:Number,required:true,default:0}

})

// insert the data in db in User Collection/Model
// new keyword

const userData=new User({
    name:"JeevanKumar",
    age:26,
    email:"   JeevanKumar@gmail.com    ",

})

//save to DB
// save()
//userData.save()
//.then() 

//async await
const connection=async()=>{
const res=await userData.save()
console.log(res,"We are connected to Mongodb....")
}
connection()