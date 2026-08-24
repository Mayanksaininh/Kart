import express from "express" 
import { isAuth } from "../middleware/isAuth.js"
import { placeOrder, userOrder } from "../controller/orderController.js"


const orderRoutes = express.Router() 


orderRoutes.post("/placeorder" , isAuth , placeOrder)
orderRoutes.post("/userorder" , isAuth ,  userOrder)

export default orderRoutes 