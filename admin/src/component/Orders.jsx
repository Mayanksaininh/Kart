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
                    <div key = {index} className="w-[90%] h-[40%] bg-slate-600 rounded-xl flex lg:items-center items-start justify-between flex-col lg:flex-row p-[10px] md:px-[20px] gap-[20px]">

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
                                })
                            }
                        </div>
                    </div>

                    </div>
                )})
            }

        </div>
    </div>
)
}

export default Orders