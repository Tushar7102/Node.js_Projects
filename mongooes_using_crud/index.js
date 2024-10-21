const express=require("express")
const {connecttoDb, userModal} = require("./db")

const app=express()
app.use(express.json())

app.post("/create",async(req,res)=>{
    try {
        await userModal.create(req.body)
        res.send("data post in db")
    } catch (error) {
        console.log(error)
    }
})

app.get("/singleuser/:id",async(req,res)=>{
    const {id}= req.params
    try {
       const data= await userModal.findById(id)
       res.send(data)
    } catch (error) {
        console.log(error)
    }
})

app.get("/getuser",async(req,res)=>{
    try {
        const data =await userModal.find()
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})


app.delete("/delete/:id",async(req,res)=>{
    const {id}= req.params
    try {
       await userModal.findByIdAndDelete(id)
       res.send("data deleted")
    } catch (error) {
        res.send(error)
    }
})


app.patch("/update/:id",async(req,res)=>{
    const {id}= req.params
    const upadatewrite=req.body
    try {
       await userModal.findByIdAndUpdate(id,{$set:{upadatewrite}})
       res.send("data updated")
    } catch (error) {
        res.send(error)
    }
})





app.listen(8080,()=>{
    console.log("server is running on port 8080")
    connecttoDb()
})