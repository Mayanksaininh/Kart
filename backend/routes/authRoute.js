import express from "express"
import { registration } from "../controller/auth.js"

const authRoute = express.Router()
authRoute.post("/registration" , registration)

export default authRoute