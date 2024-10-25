require('dotenv').config(); 
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(cors());
app.use("/user", router); 

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(8080,()=>{
      console.log("Server is running on port 8080");
    });
  })
  .catch((err) => console.log(err));
