import express from "express"
import { login, logOut, registration ,googleLogIn } from "../controller/auth.js"

const authRoute = express.Router()
authRoute.post("/registration" , registration)
authRoute.post("/login" , login)
authRoute.get("/logOut" , logOut)
authRoute.post("/googleLogIn" , googleLogIn)

export default authRoute