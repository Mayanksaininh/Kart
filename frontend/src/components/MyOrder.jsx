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

            <div className="w-[100%] h-[92%] flex flex-wrap gap-[20px]">
                {
                    orderdata.map((item,index)=>(
                        <div key = {index} className="w-[100%] h-[10%] border-t border-b">
                            <div className="w-[100%] h-[80%] flex items-start gap-6 bg-[#51808048] py-[10px] px-[20px] rounded-2xl relative">
                            <img src = {item.image1} alt = "" className="w-[130px] h-[130px] rounded-md"></img>
                            </div>

                            <div className="flex items-start justify-center flex-col gap-[5px]">
                                <p className="md:text-[25px] text-[20px] text-[#f3f9fc]">{item.name}</p>
                                <div className="flex items-center gap-[8px] md:gap-[20px]">
                                    <p className="md:text-[18px] text-[12px] text-[#aafe4e7]">{currency} {item.price}</p>
                                    <p className="md:text-[18px] text-[12px] text-[#aafe4e7]">Quantity :  {item.quantity}</p>
                                </div>
                                <div className = "flex items-center">
                                    <p className="md:text-[18px] text-[12px] text-[#aafe4e7]">Date : <span className="text-[#e4fbfb] pl-[10px] md:text-[16px] text-[11px]">{new Date(item.date).toDateString()}</span></p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MyOrder