const mongoose  = require("mongoose")


const UserSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})

const userModal=mongoose.model("user",UserSchema)

const connectToDb=async()=>{
    try {
        const connection=await mongoose.connect("mongodb://127.0.0.1:27017/test")
    console.log("Connect Successfully")
    await userModal.insertMany([{name:"Yogeshwari",age:"20",email:"yoyo@gmail.com"},{name:"Diyo",age:"5",email:"diyo@gmail.com"}])
    console.log("Data Inserting")
    } catch (error) {
        console.log("Something went Wrong")
    }
}
connectToDb()