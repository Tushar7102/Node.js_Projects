const express=require("express");
const { Getblog, createBlogs, Update, DeleteBlogsbyid, GetBlogByid, getAllBlogs, DeleteAllblogs } = require("../controler/blog.controler");
const Auth = require("../midleware/Auth");
const Admin = require("../midleware/Admin");
const app=express()
const BlogsRoute=express.Router();
BlogsRoute.get("/getblog/:Userid",Auth,Getblog)
BlogsRoute.get("/getblogbyid/:id",Auth,GetBlogByid)
BlogsRoute.post("/createblog",Auth,createBlogs);
BlogsRoute.patch("/Updateblogs/:id",Auth,Update);
BlogsRoute.delete("/delete/:id",Auth,DeleteBlogsbyid);
BlogsRoute.get("/getAllBlogs",Auth,Admin,getAllBlogs);
BlogsRoute.delete("/DeleteAllblogs",Auth,Admin,DeleteAllblogs);
module.exports=BlogsRoute;  

