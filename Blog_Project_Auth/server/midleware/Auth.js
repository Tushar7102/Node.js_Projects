const jwt=require("jsonwebtoken")

const Auth=(req,res,next)=>{
    const { token } = req.cookies;
    if(!token){
        return res.status(401).json({ message: "Please Login First"});

    }
    jwt.verify(token, process.env.privatekey, (err, decoded) => {
        if (err) {
            res.status(400).json({ message: "Invalid token" })
        }
        if(decoded){
            req.user = decoded.UserID
        }
    });
    next()
}
module.exports=Auth