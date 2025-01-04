const express=require("express");
const app=express();
app.use(express.json());
const cors=require("cors");
app.use(cors())
const dotenv=require("dotenv");
const BlogsRoute = require("./routes/Blogs.route");
const { connection } = require("./model/Blog.model");
app.use("/",BlogsRoute)

app.listen(process.env.Port ,()=>{
try {
    
    connection
    console.log("server is running on port 8080");
    
} catch (error) {
    console.log(error)
}
})