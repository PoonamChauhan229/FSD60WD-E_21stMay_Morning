console.log("Welcome to Node Modules")
console.warn("Welcome to Node Modules- danger")

//import statement
const fs=require('fs')
fs.writeFile("notes.txt","New File Created",()=>{})
fs.writeFileSync("notes1.txt","Another file",()=>{})

// test.txt  >> random text

//appendFile  >> test.txt 
fs.appendFile("notes1.txt","NODEJS ----",()=>{})

const {name,course,num}=require('./utilis')
const {show2}=require('./utilis')
console.log(name)//name is not defined
console.log(course)
console.log(num)
let res=show2()
console.log(res)