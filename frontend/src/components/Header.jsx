import React from "react"
import { logo } from "../utils/constant.jsx"


const Header = () =>{
    return (
           <div className="w-full bg-gradient-to-b from-black/100 to-black/20 h-16 flex items-center justify-between px-4">
            <div className="flex items-center gap-0">
                 <img className="h-10 md:h-12 w-auto" src={logo} alt="logo" />
                 <h1 className="text-white text-xl md:text-2xl font-semibold">Kart</h1>
            </div>
            
        </div>
    )
}

export default Header