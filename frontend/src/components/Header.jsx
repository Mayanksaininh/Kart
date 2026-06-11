import React from "react"
import { logo } from "../utils/constant.jsx"
import axios from "axios";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";


const Header = () =>{

    const [user, setUser] = useState(null);

    useEffect(() => {
  axios.get("http://localhost:8000/api/user/getCurrentUser", {
    withCredentials: true, // VERY IMPORTANT
  })
    .then(res => setUser(res.data))
    .catch(() => setUser(null));
}, []);

    return (
           <div className="w-full bg-gradient-to-b from-black/100 to-black/20 h-16 flex items-center justify-between px-0">
            <div className="flex items-center gap-0">
                 <img className="h-10 md:h-12 w-auto" src={logo} alt="logo" />
                 <h1 className="text-white text-xl md:text-3xl font-semibold">Kart</h1>
            </div>

            {user && (
            <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-5">
                <button className="bg-gray-500 hover:bg-gray-600 text-white px-2 py-1 rounded-lg">
                  Home
            </button>

            <button className="bg-gray-500 hover:bg-gray-600 text-white px-2 py-1 rounded-lg">
                     Craft
            </button>

            <button className="bg-gray-500 hover:bg-gray-600 text-white px-2 py-1 rounded-lg">
                      Art
            </button>
            </div>
            )}
            
            
        </div>
    )
}

export default Header