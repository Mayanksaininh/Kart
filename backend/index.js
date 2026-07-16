import express from "express";

import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import connectDB from "./config/DB.js";
import authRoute from "./routes/authRoute.js";
import cors from 'cors'
import userRoutes from "./routes/userRoute.js";
import productroute from "./routes/productRoute.js";
import cartRoute from "./routes/cartRoute.js";

const app = express()
app.use(cors({
    origin : ["http://localhost:5173", "http://localhost:5174"],
    credentials : true,
    expires: new Date(0),
      methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]

}))


app.use(express.json())
app.use(cookieParser())



app.use("/api/auth" , authRoute)
app.use("/api/user" , userRoutes)
app.use("/api/product" , productroute)
app.use("/api/cart" , cartRoute)

const port = 8000

app.listen(port , () =>{
    connectDB()
    // console.log("hello server")
})



