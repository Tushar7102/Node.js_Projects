const express=require("express")
const app=express()
const fs=require("fs")


app.use(express.json()); //middleware

//get route
app.get("/",(req,res)=>{
    res.send("Hello World")
})

//post route
app.post("/addproduct",(req,res)=>{
    // console.log(req.body)
    fs.readFile("./db.json","utf-8",(err,data)=>{
      if(err){
        res.send(err)
      }
      else{
        // console.log(data)
        //  res.send("ok")
        const newdata=JSON.parse(data)
        newdata.product.push(req.body)
        // console.log(newdata)
        fs.writeFile("./db.json",JSON.stringify(newdata),(err)=>{
            if(err)
            {
                res.send(err)
            }
            {
                console.log("product add")
                res.send("Product add")
            }
        })
      }
    })
})

app.delete("/deleteproduct/:id",(req,res)=>{
  const {id}=req.params
  // console.log(id)
  fs.readFile("./db.json","utf-8",(err,data)=>{
    if(err){
      res.send(err)
    }
    else{
      const newdata=JSON.parse(data)
      // console.log(newdata.product)
      newdata.product=newdata.product.filter((el)=>el.id!=id)
      console.log(newdata)
      fs.writeFile("./db.json",JSON.stringify(newdata),(err)=>{
        if(err)
        {
          res.send(err)
        }
        else{
          res.send("product deleted")
        }
      })
      // res.send("ok")
    }
  })
  // res.send("ok")
})

app.patch("/editproduct/:id",(req,res)=>{
  const {id}=req.params
  fs.readFile("./db.json",(err,data)=>{
    if(err){
      res.send(err)
    }
    else
    {
      let newdata=JSON.parse(data)
      const index=newdata.product.findIndex((el)=>el.id==id)
      if(index!=-1){
      //  res.send("edit")
      newdata.product[index]={...newdata[index],...req.body}
       console.log(newdata)

       fs.writeFile("./db.json",JSON.stringify(newdata),(err)=>{
        if(err){
          console.log(err)
        }
        else{
          res.send("product edit")
        }
      })
      }
      else
      {
        res.send("product not found")
      }
    }
  })
})

app.listen(8080,()=>{
    console.log("server run in 8080 Port")
})