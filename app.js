const express = require("express")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const cors = require("cors")
const json = require("jsonwebtoken")
const loginModel = require("./models/Admin")

const app = express()
app.use(cors())        //to handle issues
app.use(express.json())   //to handle json data

mongoose.connect("mongodb+srv://safabeegum:mongodb24@cluster0.pbzbbey.mongodb.net/wayanad_rescue?retryWrites=true&w=majority&appName=Cluster0")

app.get("/test",(req,res)=>{
    res.json({"status":"success"})
})

app.post("/AdminSignUp",(req,res)=>{
    let input = req.body
    let hashedPassword = bcrypt.hashSync(input.password,10)
    input.password = hashedPassword
    console.log(input)
    let result = new loginModel(input)
    result.save()
    res.json({"status":"success"})

})

app.listen(8080,()=>{
    console.log("server started")
})