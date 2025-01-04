const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config()
const connection = mongoose.connect(process.env.Mongodb_Url);
const Userschema = new mongoose.Schema(
    {
        name:{
            type:String,
        },
        email:{
            type:String,
        },
        password:{
            type:String,
        },
        role:{
            type:String,
            default:"user"
        }
    })
const Userdata = mongoose.model('Userdata', Userschema)

module.exports = {Userdata,connection}