const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config()
const connection = mongoose.connect(process.env.Mongodb_Url);
const BlogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        Userid:{
            type:String
        },
        author: {
            type: String,

        }
        , content: String,
        tags: {
            type: [String],
            default: []
        }
        , publishdate: {
            type: Date,
            default: Date.now()
        }
    })
const BlogPost = mongoose.model('BlogsAuth', BlogSchema)

module.exports = {BlogPost,connection}