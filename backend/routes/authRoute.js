import express from "express"
import { login, logOut, registration ,googleLogIn, adminlogin,verifyAdmin } from "../controller/auth.js"
import { adminAuth } from "../middleware/adminAuth.js"


const authRoute = express.Router()
authRoute.post("/registration" , registration)
authRoute.post("/login" , login)
authRoute.get("/logOut" , logOut)
authRoute.post("/googleLogIn" , googleLogIn)
authRoute.post("/adminlogin" , adminlogin)
authRoute.get("/verifyAdmin", adminAuth, verifyAdmin) 




export default authRoute