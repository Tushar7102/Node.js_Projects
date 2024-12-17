const UserModel = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  if (req.body.role) {
    return res.status(400).send({ massage: "Role can`t be sent sent" });
  }
  if (!name || !email || !password) {
    return res.status(400).send({ massage: "plase fill in all fields" });
  }

  try {
    const isuserExist = await UserModel.findOne({ email });

    if (isuserExist) {
      return res.status(400).send({ massage: "Email already exist" });
    }

    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        return res.status(400).send({ massage: err });
      }
      await UserModel.create({ name, email, password: hash });
      res.status(200).send({ massage: "user created Successfully" });
    });
  } catch (error) {
    res.status(400).send({ massage: error });
  }
};

const signin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ massage: "plase fill in all fields" });
  }

  try {
    const isuserExist = await UserModel.findOne({ email });

    if (!isuserExist) {
      return res.status(400).send({ massage: "email does not exist" });
    }
    bcrypt.compare(password, isuserExist.password, (err, result) => {
      if (err) {
        return res.status(400).send({ massage: err });
      }
      if (result) {
        const { password, ...rest } = isuserExist._doc;
        jwt.sign(
          { userdata: rest },
          process.env.SECRET_KEY,
          { expiresIn: "7d" },
          (err, token) => {
            if (err) {
              return res.status(400).send({ massage: err });
            }
            res
              .cookie("Token", token)
              .status(200)
              .json({ massage: "User Login Successfully" });
            // console.log(rest)
          }
        );
      }
    });
  } catch (error) {
    res.status(400).send({ massage: error });
  }
};

module.exports = { signup, signin };
