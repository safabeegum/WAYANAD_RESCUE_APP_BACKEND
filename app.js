const express = require("express")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const cors = require("cors")
const json = require("jsonwebtoken")
const loginModel = require("./models/Admin")
const addModel = require("./models/Add")

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

app.post("/AdminSignIn",(req,res)=>{
    let input = req.body
    let result=loginModel.find({username:input.username}).then(
        (response)=>{
            if (response.length>0) {
                const validator = bcrypt.compareSync(input.password,response[0].password)
                if (validator) {
                    res.json({"status":"success"})
                } else {
                    res.json({"status":"Inavalid Password"})
                }
            } else {
                res.json({"status":"Invalid Username"})
            }
        }
    ).catch()
})

app.post("/AddDetails",(req,res)=>{
    let input = req.body 
    let add = new addModel(input)
    add.save()
    res.json({"status":"Added Successfully"})
})


app.listen(8080,()=>{
    console.log("server started")
})