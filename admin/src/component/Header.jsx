import React from "react";
import LogOut from "./Logout";
import { useContext } from "react";
import { AdminDataContext } from "../Context/AdminContext";

const Header = () => {

 const { adminData } = useContext(AdminDataContext);

    return (
        <div className="fixed top-0 left-0 w-full bg-gradient-to-b from-black/100 to-black/20 h-14 sm:h-16 flex items-center justify-between px-3 sm:px-6 z-50">
            <div className="flex items-center">
                    <img className="h-8 sm:h-10 md:h-12 w-auto" 
                    src="https://static.vecteezy.com/system/resources/thumbnails/026/956/862/small/shopping-cart-basket-png.png" 
                    alt="Logo" />
                    <h1 className="text-white text-base sm:text-xl md:text-3xl font-semibold">K-Art Admin</h1>
                  </div>
            {adminData && <LogOut />}
        </div>
    )
}

export default Header;