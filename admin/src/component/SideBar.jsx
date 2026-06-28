import React from "react";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <div className=" w-[18%] min-h-screen border-r border-gray-700 py-[60px] fixed left-0 top-[63px] bg-black">
      
      <div className="flex flex-col gap-3 pt-[40px] pl-[20%] text-[15px]">

        <div
          className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-[#2c7b89] text-white"
          onClick={() => navigate("/add")}
        >
          Add item
        </div>

        <div
          className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-[#2c7b89] text-white"
          onClick={() => navigate("/list")}
        >
          List
        </div>

        <div
          className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-[#2c7b89] text-white"
          onClick={() => navigate("/orders")}
        >
          View Orders
        </div>

      </div>
    </div>
  );
};

export default SideBar;