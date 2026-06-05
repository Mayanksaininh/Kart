import express from "express";

import dotenv from "dotenv";

const app = express()
dotenv.config();

app.get("/" , (req,res) => {
    res.send("hello form app")
})

const port = process.env.PORT || 6000
app.listen(port , () =>{
    console.log("hello server")
})


