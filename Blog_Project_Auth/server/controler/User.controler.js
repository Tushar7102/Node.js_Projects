const { Userdata } = require("../model/Usermodel");
const bcrypt=require("bcrypt")
const jwt = require("jsonwebtoken");
const dotenv=require("dotenv")
const Signup=async(req,res)=>{
const {name,email,password,role}=req.body;
if(role){
res.status(400).json({message:"You can not send the role"})
}
  if(!name || !email || !password){
    return res.status(400).json({message:"Please fill in all fields"});
  }
  const User=await Userdata.findOne({email:email});

if(User){
    return res.status(400).json({message:"Email already exists"});
}
try {
       
    bcrypt.hash(password, 5, async(err, hash)=> {
           if(err){
            return res.status(400).json({message:"Error in hashing password"});
           }
           else{
            const user=await Userdata.create({name,email,password:hash})
            res.status(200).json({message:"Account created Successfull"})
           }
    });
} catch (error) {
    return res.status(400).json({message:"something went wrong"})
}


}
const Signin=async(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        return res.status(400).json({message:"Please fill in all fields"});
    }
    const User=await Userdata.findOne({email})
    if(!User){
        return res.status(400).json({message:"Email does not exist"});
    }
    try{
        bcrypt.compare(password, User.password, (err, result)=> {
            if(err){
                return res.status(400).json({message:"Error in comparing password"});
            }
            else{
                if(result){
                       
                    const {password, ...rest}=User._doc
                    const Token=jwt.sign({ UserID:rest} ,process.env.privatekey,{
                     expiresIn: '7d',
                  })  
                  return res.cookie('token',Token).status(200).json({ message: "User logged in successfully" ,...rest})
                }
            }
        });
    }
    catch(error){
        return res.status(400).json({message:"something went wrong"})
    }
}



module.exports={Signup,Signin}

