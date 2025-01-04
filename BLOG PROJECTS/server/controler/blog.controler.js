const { BlogPost } = require("../model/Blog.model");

const Getblog = async (req, res) => {
    try {
        const Blogs = await BlogPost.find();
        if (Blogs.length <= 0) {
            return res.status(400).json({ message: "No Blogs found" })
        }
        res.status(200).json({ Blogs })
    } catch (error) {
        res.status(400).json({ message: "Something went wrong", error })
        console.log(error)
    }
}
const createBlogs = async (req, res) => {
    const { title, author, content, publishdate, tags } = req.body;
    if (!title, !author, !content) {
        return res.status(400).json({ message: "Please fill all fields" })
    }
    try {
        await BlogPost.create({ title, author, content, publishdate, tags })
        res.status(200).json({ message: "Blogs created Successfully" })
    } catch (error) {
        res.status(400).json({ message: "Something went wrong", error })
        console.log(error)
    }
}
const Update = async (req, res) => {
    const { id } = req.params;
    const { title, author, content, publishdate, tags } = req.body;
    if (!title, !author, !content) {
        return res.status(400).json({ message: "Please fill all fields" })
    }
    try {
        await BlogPost.findByIdAndUpdate(id, { title, author, content, publishdate, tags })
        res.status(200).json({ message: "Blogs Updated Successfully." })
    } catch (error) {
        res.status(400).json({ message: "Something went wrong", error })
        console.log(error)
    }
}
const DeleteBlogsbyid=async(req,res)=>{
    const{id}=req.params;
    try{
      await BlogPost.findByIdAndDelete(id);
      res.status(200).json({message:"Blogs deleted Successfully."})
    }
    catch(err){
        res.status(400).json({message:"Something went wrong",err})
    }
} 
const GetBlogByid=async(req,res)=>{
const {id}=req.params;
try {
   const Blogs= await BlogPost.findById(id);
    res.status(200).json({Blogs})
} catch (error) {
    res.status(400).json({message:"Something Went Wrong"})
}
}
module.exports = { Getblog, createBlogs, Update ,DeleteBlogsbyid,GetBlogByid}