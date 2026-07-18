import User from "../models/userModel.js"

export const addtoCart = async (id) => {
  try {
    const res = await axios.post(
      `${ServerUrl}/api/cart/add`,
      { itemId: id },   // ✅ THIS IS IMPORTANT
      { withCredentials: true } // ✅ cookie send karega
    );

    console.log(res.data);
  } catch (error) { 
    console.log(error);
  }
};

export const updatecart = async(req,res) => {
    try {
        const {itemID,quantity} = req.body
        const userData = await User.findById(req.userId)
        let cartData = await userData.cartData || {}
        
        cartData[itemID] = quantity

        await User.findByIdAndUpdate(req.userId,{cartData : cartData})

        return res.status(201).json({message : "Cart updated"})


    } catch (error) {
         console.log(error);
        return res.status(500).json({ message: "Update cart Error" });
    }
}

export const getusercart = async(req,res) =>{
    try {
        const userData = await User.findById(req.userId)
        let cartData = await userData.cartData

        return res.status(200).json(cartData)

    } catch (error) {
         console.log(error);
        return res.status(500).json({ message: "get user cart Error" });
    }
}