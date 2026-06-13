import React, { useContext } from "react";
import { logo } from "../utils/constant.jsx";
import { useNavigate } from "react-router-dom";
import { userDataContext } from "../context/UserContext";
import { MdSearch } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const { userData } = useContext(userDataContext);
  const navigate = useNavigate();
  

  return (
    <div className="w-full bg-gradient-to-b from-black/100 to-black/20 h-16 flex items-center justify-between px-4">
      
      <div className="flex items-center">
        <img className="h-10 md:h-12 w-auto" src={logo} alt="logo" />
        <h1 className="text-white text-xl md:text-3xl font-semibold">Kart</h1>
      </div>

      {/* ✅ Only show after login */}
      {userData &&  userData._id && (
        <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-5">
          <button onClick={() => navigate("/home")} className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded-lg">
            Home
          </button>

          <button onClick={() => navigate("/craft")} className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded-lg">
            Craft
          </button>

          <button onClick={() => navigate("/art")} className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded-lg">
            Art
          </button>
        </div>
      )}
     {userData && userData._id && (
      <div className="flex items-center ml-auto gap-0 pr-2">
    
        <div className="p-2">
            <MdSearch className="text-white text-2xl" />
        </div>

         <div className="p-1">
           <CgProfile className="text-white text-2xl" />
           </div>

      </div>
)}
    </div>
  );
};

export default Header;