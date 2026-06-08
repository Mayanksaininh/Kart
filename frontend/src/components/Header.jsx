import React from "react"
import { logo } from "../utils/constant,jsx"


const Header = () =>{
    return (
           <div className="w-full bg-gradient-to-b from-black/100 to-black/20 h-16 flex items-center justify-between px-4">
             <img className="h-6 md:h-9 w-auto" src={logo} alt="logo" />
             <h2 className="text-white bg-red-500">Kart</h2>
        </div>
    )
}

export default Header