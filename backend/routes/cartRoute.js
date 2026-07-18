import express from "express"
import { addtoCart, getusercart, updatecart } from "../controller/cartController.js"
import { isAuth } from "../middleware/isAuth.js"

const cartRoute = express.Router()

cartRoute.post("/get" , isAuth , getusercart)
cartRoute.post("/add" , isAuth, addtoCart)
cartRoute.post("/update", isAuth, updatecart)

export default cartRoute
