import React from "react";
import SideBar from "./SideBar";


const Orders = () =>{

return (
    <div className="min-h-screen">
        <SideBar />

        <div className="ml-[100px] md:ml-[250px] lg:ml-[310px] mt-[70px] min-h-screen px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 overflow-x-hidden">

            <div className="w-full text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-8">
                All Orders List
            </div>

        </div>
    </div>
)
}

export default Orders