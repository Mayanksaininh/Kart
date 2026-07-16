import express from "express"
import { addtocart, getusercart, updatecart } from "../controller/CartContoller"
import isAuth from "../middleware/isAuth"

const cartRoute = express.Router()

cartRoute.post("/get" , isAuth , getusercart)
cartRoute.post("/add" , isAuth, addtocart)
cartRoute.post("/update", isAuth, updatecart)

export default cartRoute
