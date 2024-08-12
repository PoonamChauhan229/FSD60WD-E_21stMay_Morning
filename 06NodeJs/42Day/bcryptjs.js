const bycrypt=require('bcryptjs')
const myFunction=async()=>{
const password="Red12345"
//hash + salt

const salt=await bycrypt.genSalt(10)
const hashedPassord=await bycrypt.hash(password,salt)
console.log("Hashed Paswword:",hashedPassord)
console.log("Paswword:",password)
//compare
isMatch=await bycrypt.compare(password,hashedPassord)
console.log(isMatch)
}
myFunction()