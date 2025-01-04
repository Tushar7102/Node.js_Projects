const express=require("express");
const { Signup, Signin } = require("../controler/User.controler");
const app=express()
const expressRouter=express.Router();
expressRouter.post("/signup",Signup)
expressRouter.post("/signin",Signin)
module.exports=expressRouter
