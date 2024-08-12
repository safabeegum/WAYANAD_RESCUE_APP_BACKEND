const mongoose = require("mongoose")

const AddSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        phone:{
            type:String,
            required:true
        },
        village:{
            type:String,
            required:true
        },
        place:{
            type:String,
            required:true
        },
        pincode:{
            type:String,
            required:true
        },
        houseno:{
            type:String,
            required:true
        },
        missdate:{
            type:String,
            required:true
        },
        aadharno:{
            type:String,
            required:true
        },
        gender:{
            type:String,
            required:true
        },
        age:{
            type:String,
            required:true
        }
    }
)

const addModel = mongoose.model("Add data",AddSchema)
module.exports = addModel