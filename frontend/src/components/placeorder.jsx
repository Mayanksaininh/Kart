import React from "react";

const PlaceOrder = () => {
    return (
        <div className="lg:w-[50%] w-full h-full flex items-center justify-center lg:mt-0 mt-16 px-4">
  <form className="w-full lg:w-[70%] flex flex-col gap-4">
    
    <div className="py-3 sm:py-4 flex justify-center">
  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center relative">
    Delivery Information
    <span className="block w-12 sm:w-16 h-[3px] bg-blue-400 mx-auto mt-2 rounded-full"></span>
  </h1>
</div>

    {/* First & Last Name */}
    <div className="flex flex-col sm:flex-row gap-3">
      <input type="text" placeholder="First name" required
       className="w-full sm:w-[48%] h-[48px] rounded-md bg-white text-black placeholder-gray-400 text-[16px] px-4 shadow-sm shadow-[#343434] outline-none focus:ring-2 focus:ring-blue-400"></input>
      <input type="text" placeholder="Last name" required
        className= "w-full sm:w-[48%] h-[48px] rounded-md bg-white text-black placeholder-gray-400 text-[16px] px-4 shadow-sm shadow-[#343434] outline-none focus:ring-2 focus:ring-blue-400" />
    </div>

    {/* Email */}
    <div className="flex">
      <input type="email" placeholder="Email" required
        className ="w-full sm:w-[48%] h-[48px] rounded-md bg-white text-black placeholder-gray-400 text-[16px] px-4 shadow-sm shadow-[#343434] outline-none focus:ring-2 focus:ring-blue-400" />
    </div>

    {/* Street & Landmark */}
    <div className="flex flex-col sm:flex-row gap-3">
      <input type="text" placeholder="Street" required
        className="w-full sm:w-[48%] h-[48px] rounded-md bg-white text-black placeholder-gray-400 text-[16px] px-4 shadow-sm shadow-[#343434] outline-none focus:ring-2 focus:ring-blue-400" />
      <input type="text" placeholder="Land-Mark" required
        className="w-full sm:w-[48%] h-[48px] rounded-md bg-white text-black placeholder-gray-400 text-[16px] px-4 shadow-sm shadow-[#343434] outline-none focus:ring-2 focus:ring-blue-400" />
    </div>

    {/* City & Pincode */}
    <div className="flex flex-col sm:flex-row gap-3">
      <input type="text" placeholder="City" required
        className="w-full sm:w-[48%] h-[48px] rounded-md bg-white text-black placeholder-gray-400 text-[16px] px-4 shadow-sm shadow-[#343434] outline-none focus:ring-2 focus:ring-blue-400" />
      <input type="text" placeholder="Pincode" required
        className="w-full sm:w-[48%] h-[48px] rounded-md bg-white text-black placeholder-gray-400 text-[16px] px-4 shadow-sm shadow-[#343434] outline-none focus:ring-2 focus:ring-blue-400" />
    </div>

    {/* State */}
    <div className="flex">
      <input type="text" placeholder="State" required
        className="w-full sm:w-[48%] h-[48px] rounded-md bg-white text-black placeholder-gray-400 text-[16px] px-4 shadow-sm shadow-[#343434] outline-none focus:ring-2 focus:ring-blue-400" />
    </div>

    {/* Contact */}
    <div className="flex">
      <input type="text" placeholder="Contact Number" required
        className="w-full sm:w-[48%] h-[48px] rounded-md bg-white text-black placeholder-gray-400 text-[16px] px-4 shadow-sm shadow-[#343434] outline-none focus:ring-2 focus:ring-blue-400" />
    </div>

    <div className="w-full flex justify-center mt-4">
  <button
    type="submit"
    className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 
               bg-gradient-to-r from-blue-500 to-cyan-400 
               text-white text-sm sm:text-base font-semibold 
               rounded-lg shadow-md shadow-blue-500/30 
               hover:from-blue-600 hover:to-cyan-500 
               active:scale-95 transition-all duration-200"
  >
    Place Order
  </button>
</div>

  </form>
</div>
    )
}

export default PlaceOrder