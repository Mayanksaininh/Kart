import React, { useContext, useEffect, useState } from "react";
import {ShopDataContext} from "../context/ShopContext"
import {AuthDataContext} from "../context/AuthContext"
import axios from "axios";


const MyOrder = () => {

    const [orderdata , setorderdata] = useState([])
    const {currency} = useContext(ShopDataContext)
    const {ServerUrl} = useContext(AuthDataContext)


    const loadOrderData = async() => {
        try {
            const result = await axios.post(ServerUrl + "/api/order/userOrder", {} , {withCredentials : true})


        console.log("ORDER API RESPONSE:", result.data)
        
            if(result.data){
                let allOrdersItem = []
                result.data.map((order) => {
                    order.items.map((item) => {
                        item["status"] = order.status
                        item["payment"] = order.payment
                        item["date"] = order.date
                        // item["paymentmethod"] = order.paymentmethod
                        allOrdersItem.push(item)
                    })
                })

                    console.log("ALL ORDER ITEMS:", allOrdersItem)
                setorderdata(allOrdersItem.reverse())
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadOrderData()
    } , [])

    return (
        <div className="w-full max-w-7xl mx-auto text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide mt-3">
                <h1>My Orders </h1>
            </div>

            <div className="w-full flex flex-col gap-4 mt-6 px-4">
  {orderdata.map((item, index) => (
    <div
      key={index}
      className="w-full flex flex-col sm:flex-row items-start gap-4 bg-[#51808048] border border-gray-600 py-4 px-4 sm:px-6 rounded-2xl"
    >
      {/* Image */}
      <img
        src={item.image1}
        alt=""
        className="w-[80px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] rounded-md object-cover shrink-0"
      />

      {/* Details */}
      <div className="flex flex-col gap-2 flex-1">
        <p className="text-[18px] sm:text-[20px] md:text-[22px] text-[#f3f9fc] font-medium">
          {item.name}
        </p>

        <div className="flex flex-wrap items-center gap-3 sm:gap-6">
          <p className="text-[13px] sm:text-[15px] md:text-[17px] text-[#aaf5fa]">
            {currency} {item.price} + delivery charge
          </p>
          <p className="text-[13px] sm:text-[15px] md:text-[17px] text-[#aaf5fa]">
            Qty: {item.quantity}
          </p>
        </div>

        <p className="text-[12px] sm:text-[14px] md:text-[15px] text-[#aaf5fa]">
          Date:{" "}
          <span className="text-[#e4fbfb]">
            {new Date(item.date).toDateString()}
          </span>
        </p>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 shrink-0"></span>
          <p className="text-[12px] sm:text-[14px] text-green-400 font-medium">
            {item.status}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>
        </div>
    )
}

export default MyOrder