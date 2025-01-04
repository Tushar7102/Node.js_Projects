const Admin=(req,res,next)=>{
    const User=req.user;
if(User.role=="admin"){
    next();
}
    else{
        res.status(403).send({message:"You are not access the Blogs."});
    }
}


module.exports=Admin;