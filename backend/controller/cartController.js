import User from "../models/userModel.js"


export const addtoCart = async (req, res) => {
  try {

      // console.log("userId:", req.userId);      
    // console.log("itemId:", req.body);
    const { itemId } = req.body;

    const userData = await User.findById(req.userId);
    console.log("userData:", userData); 

    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    let cartData = userData.cartData || {};
    // console.log("cartData before:", cartData);

    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }

    await User.findByIdAndUpdate(req.userId, { $set: { cartData }});
    //  console.log("cartData after:", cartData)

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