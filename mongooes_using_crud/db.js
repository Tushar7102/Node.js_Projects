
const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    age:String,
})
const userModal=mongoose.model("user",UserSchema)
const connecttoDb=async()=>{
    try {
       await mongoose.connect("mongodb://localhost:27017/prectice")
       console.log("Connect to Db")
    } catch (error) {
        console.log(error)
    }
}
module.exports={connecttoDb,userModal}