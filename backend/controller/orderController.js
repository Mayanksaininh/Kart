import User from "../models/userModel.js"
import Order from "../models/orderModel.js"

export const placeOrder = async (req,res) =>{
    try {

        const{items , amount , address} = req.body
        const userID = req.userId
        const orderData = {
            items,
            amount,
            userID,
            address,
            payment : false,
            date : Date.now()
        }

        const newOrder = new Order(orderData)
        await newOrder.save()

        await User.findByIdAndDelete(userID , {cartData :{} })        

        return res.status(201).json({message : 'Order Palced'})

    } catch (error) {
        console.log(error)
        return res.status(500).json({message : 'Order Placed Error'}) 
    }
}