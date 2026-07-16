import express from "express"
import { addtocart, getusercart, updatecart } from "../controller/cartContoller.js"
import { isAuth } from "../middleware/isAuth.js"

const cartRoute = express.Router()

cartRoute.post("/get" , isAuth , getusercart)
cartRoute.post("/add" , isAuth, addtocart)
cartRoute.post("/update", isAuth, updatecart)

export default cartRoute
