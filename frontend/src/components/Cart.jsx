import React, { useContext, useEffect, useState } from "react";
import { ShopDataContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

const Cart = () =>{

    const {product , currency, cartItem, updateQuantity } = useContext(ShopDataContext)
    const navigate = useNavigate()
    const [cartData , setcartData] = useState([])

 useEffect(() => {

  const tempData = []

  for (const itemId in cartItem) {
    if (cartItem[itemId] > 0) {
      tempData.push({
        _id: itemId,
        quantity: cartItem[itemId]
      })
    }
  }

  setcartData(tempData)
}, [cartItem])

 return (
    <div>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white text-center relative">
        Your Cart
        <span className="block w-12 h-[2px] bg-green-400 mx-auto mt-2 rounded-full"></span>
        </h1>

        <div className="w-[100%] h-[92%] flex flex-wrap gap-[20px]">
            {
                cartData.map((item, index) => {
                    const productData = product.find((product) => product._id === item._id)

                    return (
                        <div key = {index} className="w-[100%] h-[10%] border-t border-b">
                            <div className="w-[100%] h-[80%] flex items-start gap-6 bg-[#51808048] py-[10px] px-[20px] rounded-2xl relative">
                                    <img className="w-[85px] h-[145px] rounded-md " src = {productData.image1} alt = ""></img>
                                      <div className="flex items-start justify-center flex-col gap-[10px]">
                                    <p className="md:text-[25px] text-[20px] text-[#f3f9fc]">{productData.name}</p>
                                    <p className="md:text-[25px] text-[20px] text-[#aaf4e7]">{currency} {productData.price}</p>
                            </div>
                            </div>
                          
                        </div>
                    )
                })
            }
        </div>
    </div>
 )
}

export default Cart