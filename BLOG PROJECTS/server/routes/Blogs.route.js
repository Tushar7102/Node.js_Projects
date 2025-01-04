const express=require("express");
const { Getblog, createBlogs, Update, DeleteBlogsbyid, GetBlogByid } = require("../controler/blog.controler");
const app=express()
const BlogsRoute=express.Router();
BlogsRoute.get("/getblog",Getblog)
BlogsRoute.get("/getblogbyid/:id",GetBlogByid)
BlogsRoute.post("/createblog",createBlogs);
BlogsRoute.patch("/Updateblogs/:id",Update);
BlogsRoute.delete("/delete/:id",DeleteBlogsbyid);
module.exports=BlogsRoute
