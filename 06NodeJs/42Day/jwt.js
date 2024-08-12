const jwt=require('jsonwebtoken')
//_id: user._id
const token=jwt.sign({_id:"66b5af931fe96876f9ab7fd6"},"nodejs",{expiresIn:"7days"})
console.log(token)

//verify
const match=jwt.verify(token,"nodejs")
console.log(match)

//signin >> generate a token >>