import express from "express"
import { login,registration } from "../controller/auth.js"

const authRoute = express.Router()
authRoute.post("/registration" , registration)
authRoute.post("/login" , login)

export default authRoute