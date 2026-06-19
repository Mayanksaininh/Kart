import React from "react";

const Header = () =>{
    return (
        <div className="w-full bg-gradient-to-b from-black/100 to-black/20 h-16 flex items-center justify-between px-0">
            <div className="flex items-center">
                    <img className="h-10 md:h-12 w-auto" 
                    src="https://static.vecteezy.com/system/resources/thumbnails/026/956/862/small/shopping-cart-basket-png.png" 
                    alt="Logo" />
                    <h1 className="text-white text-xl md:text-3xl font-semibold">Kart-Admin</h1>
                  </div>
        </div>
    )
}

export default Header