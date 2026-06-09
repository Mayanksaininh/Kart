import express from "express";

import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import connectDB from "./config/DB.js";
import authRoute from "./routes/authRoute.js";
import cors from 'cors'

const app = express()


app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin : "http://localhost:5173/",
    credentials : true,
}))


app.use("/api/auth" , authRoute)

const port = process.env.PORT || 6000

app.listen(port , () =>{
    connectDB()
    // console.log("hello server")
})



