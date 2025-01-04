const express=require("express");
const app=express();
app.use(express.json());
const cors=require("cors");
app.use(cors({
    origin:["http://localhost:5173"],
    credentials:true

}))
var cookieParser = require('cookie-parser')
app.use(cookieParser())
const dotenv=require("dotenv");
const BlogsRoute = require("./routes/Blogs.route");
const { connection } = require("./model/Blog.model");
const Signup = require("./controler/User.controler");
const expressRouter = require("./routes/Userroutes");
app.use("/",BlogsRoute)
app.use("/User",expressRouter)

app.listen(process.env.Port ,()=>{
try {
    connection
    console.log("server is running on port 8080");
    
} catch (error) {
    console.log(error)
}
})