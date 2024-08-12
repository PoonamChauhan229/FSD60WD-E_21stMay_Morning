const User=require('../model/userModel')
const express=require('express')
const router=express.Router()
const bycrypt=require('bcryptjs')
const auth=require('../middleware/auth')
//GET 
//POST  >> SIGNUP 
router.post('/adduser',async(req,res)=>{
    //request > req
    // console.log(req.body)
    try{
        let user=await User.findOne({email:req.body.email})
        console.log(user)
        if(user){
            return res.send({"message":"User Already exists"})//early return
        }
       const salt=await bycrypt.genSalt(10)
       const hashedPassword=await bycrypt.hash(req.body.password,salt) 
        const userData=new User({
            name:req.body.name,
            age:req.body.age,
            email:req.body.email,
            phone_number:req.body.phone_number,
            password:hashedPassword
        })
        userData.save()
        res.send(userData)
    }catch(e){
        res.send("Some internal error")
    }
})

//POST  >> SIGNIN 
router.post('/signin',async(req,res)=>{
    //email   >> verify 
    //password >> password
    let user=await User.findOne({email:req.body.email})
    // res.send({"User":user})
   // console.log(user)
    //password
    const isValidPassword=await bycrypt.compare(req.body.password,user.password)
    //console.log(isValidPassword)

     // work on token >> userModel
     const token=await user.generateToken()
     console.log(token)


    if(token){
        res.send({
            message:"User Email Password Matched Successfully",
            user:user,
            token:token
        })
    }

  
    // User Relationship Model 
})

// My Own Profile 

router.get('/users/me',auth,async(req,res)=>{
  //specific user who has logged in
  // token
  console.log(req.user)
  const getProfile=await User.findById(req.user._id)
  res.send(getProfile)

})
    

//update my profile> PUT/PATCH > IDs
router.put('/users/me',auth,async(req,res)=>{
   try{
        const updateUser=await User.findByIdAndUpdate(req.user._id,req.body,{new:true,runValidators:true})
        res.send(updateUser)
   }catch(e){
    res.send("Some internal error")
}

})

//delete Method
//auth >> 
router.delete('/users/me',auth,async(req,res)=>{
    try{
        const deleteUser=await User.findByIdAndDelete(req.user._id)
        console.log(deleteUser)
            if(deleteUser){                    
                res.send({
                    deletedUser:deleteUser,
                    message:"User Deleted Successfully"

                })
            }
            res.send({message:"User Not found"})
                
        }        
    catch(e){
        res.send("Some internal Error")
    }
})

module.exports=router


// Pradeep > 10 task
// Vidya   > 5 task

// 15 task 
    
// all 15 task we are able to crud 
// Pardeep > 10 tak >> 10 task  >>> crud only those 10 task
// user task relationship  
    