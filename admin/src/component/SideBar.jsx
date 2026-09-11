import React from "react";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[100px] sm:w-[180px] md:w-[220px] lg:w-[250px] h-[calc(100vh-65px)] border-r border-gray-700 py-[60px] fixed left-0 top-[63px] bg-black z-30">

      <div className="flex flex-col gap-3 pt-[40px] px-2 sm:px-4 md:px-6">

        <div
          className="flex items-center px-2 sm:px-3 py-2 cursor-pointer hover:bg-[#2c7b89] text-white text-[12px] sm:text-[14px] md:text-[15px] rounded"
          onClick={() => navigate("/add")}
        >
          Add item
        </div>

        <div
          className="flex items-center px-2 sm:px-3 py-2 cursor-pointer hover:bg-[#2c7b89] text-white text-[12px] sm:text-[14px] md:text-[15px] rounded"
          onClick={() => navigate("/list")}
        >
          List
        </div>

        <div
          className="flex items-center px-2 sm:px-3 py-2 cursor-pointer hover:bg-[#2c7b89] text-white text-[12px] sm:text-[14px] md:text-[15px] rounded"
          onClick={() => navigate("/orders")}
        >
          View Orders
        </div>

      </div>
    </div>
  );
};

export default SideBar;



