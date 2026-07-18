import User from "../models/userModel.js"


export const addtoCart = async (req, res) => {
  try {
    const { itemId } = req.body;

    const userData = await User.findById(req.userId);

    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    let cartData = userData.cartData || {};

    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }

    await User.findByIdAndUpdate(req.userId, { cartData });

    return res.status(201).json({ message: "Added to cart" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
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