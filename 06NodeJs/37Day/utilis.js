const name="Guvi geek"
const course="fsd"
const num=54

const show1=()=>{
    console.log("Function1")
}

const show2=()=>{
    return "Function2"
}

const show3=(a,b)=>{
    return a+b;
}
// module.exports=name
module.exports={name,course,num,show1,show2,show3}