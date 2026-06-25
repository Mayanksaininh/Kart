import React from "react";
import { useNavigate } from "react-router-dom";


const SideBar = () =>{
    const navigate = useNavigate()

    return(
        <div className="w-[18%] min-h-[100vh] border-r-[1px] py-[60px] fixed left-0 top-[63px]">
            <div className="flex flex-col gap-3 pt-[40px] pl-[20%] text-[15px]">
                <div className="flex item-center justify-center md:justify-start gap-3 border border-gray-200 border-r-0 px-3 py-2 cursor-pointer hover:bg-[#2c7b89]" onClick={() => navigate("/add")}>
                    <p className="text-white">Add item</p>

                </div>

                <div className="flex item-center justify-center md:justify-start gap-3 border border-gray-200 border-r-0 px-3 py-2 cursor-pointer hover:bg-[#2c7b89]" onClick={()=> navigate("/list")}>
                    <p className="text-white">List</p>

                </div>

                <div className="flex item-center justify-center md:justify-start gap-3 border border-gray-200 border-r-0 px-3 py-2 cursor-pointer hover:bg-[#2c7b89]" onClick={()=> navigate("/orders")}>
                    <p className="text-white">View Orders</p>

                </div>
            </div>
            
        </div>
    )
}

export default SideBar