const express=require('express')
//exports a functions 
const app=express()
//console.log(app)

// React: 5173
// Mongodb:127.0.0.1:27017

const PORT=3000

//root route/ endpoints
app.get('/',(req,res)=>{
    res.send("Hello World")
})
app.get("/home",(req,res)=>{
    res.send("Welcome to Home Page") // normal text
})
app.get("/about",(req,res)=>{
    res.send("<h1>Welcome to About Page</h1>") // html
})
app.get('/services',(req,res)=>{
    res.send({                           // object
        "service":"service1",
        "desc":"Salon Service"
    })
})

app.get('/contactus',(req,res)=>{
    res.send([                                         //array of object
        {"contact":"Asst Managaer","phone":456789456},
        {"contact":"Managaer","phone":156789456},
        {"contact":"Account Managaer","phone":556789456},
        {"contact":"HR Managaer","phone":856789456},
        {"contact":"Canteen Managaer","phone":956789456},
        {"contact":"HouseKeeping Managaer","phone":689789456},
    ])
})

app.get("/products",(req,res)=>{
    res.send([
        {"product_name":"Tool Kit","price":"Rs. 300"},
        {"product_name":"Hammer","price":"Rs. 600"},
        {"product_name":"Spring","price":"Rs. 100"},
        {"product_name":"Nuts","price":"Rs. 50"},
        {"product_name":"Controllers","price":"Rs. 800"},
        {"product_name":"MCB Boards","price":"Rs. 400"},
        {"product_name":"Otto Men's Tshirt","price":"Rs. 450","color":"Black"},
        {"product_name":"Jockey Slim fit short","price":"Rs. 950","color":"Blue"},
        {"product_name":"Mens Cotton Jacket","price":"Rs. 1550","color":"Olive-Green"},
        {"product_name":"Kids gift box","price":"Rs. 800","color":"Pink"},
        {"product_name":"HM Women Wear","price":"Rs. 1150","color":"Violet"},
        {"product_name":"SnowBoard winter Jacket Coat for Women","price":"Rs. 3000","color":"Grey"},
    ])
})

app.get('/weather',(req,res)=>{
    console.log(req.query.city)// gives an object
    res.send({
        "cityName":req.query.city,
        "forecast":"Mild Hot"
    })
})
// listen method
app.listen(PORT,()=>{
    console.log("Server Started at Port No",PORT)
})

