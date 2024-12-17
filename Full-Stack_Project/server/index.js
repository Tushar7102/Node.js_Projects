const express = require("express")
const dotenv = require("dotenv")
const connection = require("./config/db")
const userRouter = require("./routes/user.routes")
const notesRouter = require("./routes/notes.routes")
const cookieParser = require("cookie-parser")
dotenv.config()

const app = express()
app.use(cookieParser())
app.use(express.json())

app.use("/user", userRouter)

app.use("/notes", notesRouter)

app.listen(process.env.PORT || 3000, async () => {
    try {
        await connection
        console.log("connect to server")
        console.log(`server running on port ${process.env.port || 3000}`)
    } catch (error) {
        console.log(error)
    }
})