import express from "express";

import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/DB.js";

const app = express()


app.get("/" , (req,res) => {
    res.send("hello form app")
})

const port = process.env.PORT || 6000

app.listen(port , () =>{
    connectDB()
    // console.log("hello server")
})



