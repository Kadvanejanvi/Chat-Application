import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config()
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("connect to mongoDB");
}).catch((err)=>{
    console.log(err);
})

const app = express()

const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("hello world")
})

//import routes
import authRouters from "./routes/auth.rouths.js"
app.use("/api/auth",authRouters)

app.listen(PORT, () => {
    console.log("server is running at 3000"+ PORT);
})