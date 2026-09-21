import React, { useContext, useEffect, useState } from "react";
import SideBar from "./SideBar";
import { AuthDataContext } from "../Context/AuthContext";
import axios from "axios";


const Orders = () =>{

const [orders , setorders] = useState([])
const {ServerUrl} = useContext(AuthDataContext)

const fetchAllOrder = async() => {
    try {
        const result = await axios.post(ServerUrl + "/api/order/list" , {} , {withCredentials : true})
        setorders(result.data.reverse())
    } catch (error) {
        console.log(error);
    }
}

const statusHandler = async(e , orderId) =>{
    try {
        const newStatus = e.target.value
        const result = await axios.post(ServerUrl + "/api/order/status" , {orderId, status:e.target.value} , {withCredentials : true})
        
        if(result.data){
            setorders(prev => prev.map(order => 
                order._id === orderId 
                    ? { ...order, status: newStatus } 
                    : order
            ))
        }
    } catch (error) {
        console.log(error);

    }
}

useEffect(() => {
    fetchAllOrder()
} , [])

return (
    <div className="min-h-screen">
        <SideBar />

        <div className="ml-[100px] md:ml-[250px] lg:ml-[310px] mt-[70px] min-h-screen px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 overflow-x-hidden">

            <div className="w-full text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-8">
                All Orders List
            </div>

            {
                orders.map((order,index) => {
                    return(
                    <div key = {index} className="w-[90%] h-[40%] bg-slate-600 rounded-xl flex lg:items-center items-start justify-between flex-col lg:flex-row p-[10px] md:px-[20px] gap-[20px] mb-4 ">

                    <div>
                        <div className="flex items-start justify-center flex-col gap-[5px] text-[16px] text-[#56dbfc] ">
                            {
                                order.items.map((item,index) => {
                                    if(index === order.items.length - 1){
                                        return (<p key = {index}>
                                            {item.name.toUpperCase()}  *  {item.quantity}
                                        </p>
                                        )
                                    }
                                    else {
                                        return (
                                            <p key = {index}> {item.name.toUpperCase()} * {item.quantity} , <span></span></p>
                                        )
                                    }
                                })
                            }
                        </div>

                        <div className="text-[15px] text-green-100">
                            <p>{"Mr./Mrs. "+order.address.firstname+ " " +order.address.lastname}</p>
                            <p>{order.address.email + ", " + "Contact : " + order.address.contact}</p>
                            <p>{order.address.street + ", " +"House Number : " + order.address.houseNumber+ ", "+"Land-Mark : " + order.address.landmark}</p>
                            <p>{"City : "+order.address.city + ", " + order.address.pincode + ", " + order.address.state + ", " + order.address.country}</p>
                        </div>

                        <div className="text-[15px] "></div>
                            <p>Items : {order.items.length}</p>
                            <p>Payment : {order.payment ? "Done" : "Pending"}</p>
                             <p>Time : {new Date(order.date).toLocaleTimeString()}</p>
                            <p>Date : {new Date(order.date).toLocaleDateString()}</p>
                            <p className="text-[20px] text-white">₹ {order.amount}</p>
                        </div>

                        <select value={order.status} className="px-[5px] py-[10px] bg-slate-500 rounded-lg border-[1px] border-[#96eef3]" onChange={(e) => statusHandler(e,order._id)}>
                          <option value="Order Placed">Order Placed</option>  
                          <option value="Packing">Packing</option>  
                          <option value="Shipped">Shipped</option>  
                          <option value="Out for Delivery">Out for Delivery</option>  
                          <option value="Delivered">Delivered</option>  
                        </select>
                    </div>

                     
                )})
            }

        </div>
    </div>
)
}

export default Orders