import express from "express" 
import { isAuth } from "../middleware/isAuth.js"
import { placeOrder, userOrder , allOrders , updateStatus } from "../controller/orderController.js"
import { adminAuth } from "../middleware/adminAuth.js"


const orderRoutes = express.Router() 

// for users
orderRoutes.post("/placeorder" , isAuth , placeOrder)
orderRoutes.post("/userOrder" , isAuth ,  userOrder)

// for admin 
orderRoutes.post("/list"  , adminAuth, allOrders)
orderRoutes.post("/status"  , adminAuth, updateStatus)



export default orderRoutes 