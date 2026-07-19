import React, { useContext } from "react";
import { logo } from "../utils/constant.jsx";
import { useNavigate } from "react-router-dom";
import { userDataContext } from "../context/UserContext";
// import { MdSearch } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { useState } from "react";
import { AuthDataContext } from "../context/AuthContext";
import axios from "axios";
import { ShopDataContext } from "../context/ShopContext.jsx";




const Header = () => {
  const { userData , getCurrentUser} = useContext(userDataContext);
  let {ServerUrl} = useContext(AuthDataContext)
  const navigate = useNavigate();
  const [ShowProfile , setShowProfile] = useState(false)
  const {getcartcount} = useContext(ShopDataContext)

  const handleLogOut = async () =>{
    try {
      const result = await axios.get(ServerUrl + "/api/auth/logOut" , {withCredentials : true})
      console.log(result.data);
      getCurrentUser()

    } catch (error) {
      console.log(error);
    }
  }
 

 return (
  <div className="w-full bg-gray-900 min-h-16 flex flex-wrap items-center justify-between px-4 md:px-8 py-2">

    {/* LEFT: LOGO */}
    <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
      <img className="h-10 md:h-12" src={logo} alt="logo" />
      <h1 className="text-white text-xl md:text-2xl font-semibold">Kart</h1>
    </div>

    {/* CENTER MENU (NOW ALWAYS VISIBLE) */}
    {userData && userData._id && (
      <div className="w-full md:w-auto flex justify-center md:justify-start order-3 md:order-none mt-2 md:mt-0">
      <div className="flex gap-3 sm:gap-4 md:gap-6 text-white font-medium flex-wrap justify-center">

   <button 
    onClick={() => navigate("/home")} 
    className="px-3 py-1 text-sm md:text-base hover:text-gray-100 cursor-pointer"
  >
    Home
  </button>

  <button 
    onClick={() => navigate("/collection")} 
    className="px-3 py-1 text-sm md:text-base hover:text-gray-100 cursor-pointer"
  >
    Collection
  </button>

  <button 
    onClick={() => navigate("/contact")} 
    className="px-3 py-1 text-sm md:text-base hover:text-gray-100 cursor-pointer"
  >
    Contact
  </button>

</div>
      </div>
    )}

    {/* RIGHT SIDE */}
    {userData && userData._id && (
      <div className="flex items-center gap-4 relative">

        {/* PROFILE */}
        <div className="relative">
          <div
            className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-gray-600 text-white font-semibold cursor-pointer"
            onClick={() => setShowProfile(prev => !prev)}
          >
            {userData?.name?.[0] || "U"}
          </div>

          {ShowProfile && (
            <div className="absolute right-0 mt-2 w-[200px] bg-white rounded-xl shadow-md overflow-hidden z-20">
              <ul className="py-1 text-sm text-gray-700">
                <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">📦 My Orders</li>
                <li
                  className="px-3 py-2 text-red-500 hover:bg-gray-100 cursor-pointer"
                  onClick={handleLogOut}
                >
                  🚪 Log Out
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* CART */}
        <div className="relative cursor-pointer">
          <BsCart2 className="text-white text-xl md:text-2xl" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-[16px] h-[16px] md:w-[18px] md:h-[18px] flex items-center justify-center rounded-full" onClick={() => navigate("/cart")}>
            {getcartcount()}
          </span>
        </div>

      </div>
    )}

  </div>
);
};

export default Header;