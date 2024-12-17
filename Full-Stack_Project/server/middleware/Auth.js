const jwt = require("jsonwebtoken");
require("dotenv").config;

const isAuth = (req, res, next) => {
  const { Token } = req.cookies;
  // console.log(Token)
  if (!Token) {
    return res
      .status(401)
      .json({ massage: "Please login to access this resource" });
  }
  jwt.verify(Token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ massage: err });
    }
    //  console.log(decoded)
    req.user = decoded.userdata;
    next();
  });
};
module.exports = isAuth;
