import React , { useContext, useState } from "react";
import { ShopDataContext } from "../context/ShopContext";

const PlaceOrder = () => {
  
    const {currency , delivery_fee, getcartAmount} = useContext(ShopDataContext)

    const [method , setmethod] = useState("razorpay")

    const [formData , setformData] = useState({
      firstname : "",
      lastname : "",
      email : "",
      street : "",
      landmark : "",
      city: "",
      state : "",
      pincode : "",
      contact : "",
    })

    const onChangeHandler = (e)=>{
      const name = e.target.name
      const value = e.target.value
      setformData(data => ({...data , [name] : value}))
    }

    return (
      <div className="flex flex-col lg:flex-row gap-6 px-4 sm:px-6 lg:px-10 py-6">
        <div className="w-full lg:w-1/2">
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
       className="w-full sm:w-[48%] h-[48px] rounded-md bg-white text-black placeholder-gray-400 text-[16px] px-4 shadow-sm shadow-[#343434] outline-none focus:ring-2 focus:ring-blue-400" onChange={onChangeHandler} name = "firstname" value = {formData.firstname}></input>
      <input type="text" placeholder="Last name" required
        className= "w-full sm:w-[48%] h-[48px] rounded-md bg-white text-black placeholder-gray-400 text-[16px] px-4 shadow-sm shadow-[#343434] outline-none focus:ring-2 focus:ring-blue-400" onChange={onChangeHandler} name = "lastname" value = {formData.lastname} />
    </div>

    {/* Email */}
    <div className="flex">
      <input type="email" placeholder="Email" required
        className ="w-full sm:w-[48%] h-[48px] rounded-md bg-white text-black placeholder-gray-400 text-[16px] px-4 shadow-sm shadow-[#343434] outline-none focus:ring-2 focus:ring-blue-400" onChange={onChangeHandler} name = "email" value = {formData.email}/>
    </div>

    {/* Street & Landmark */}
    <div className="flex flex-col sm:flex-row gap-3">
      <input type="text" placeholder="Street" required
        className="w-full sm:w-[48%] h-[48px] rounded-md bg-white text-black placeholder-gray-400 text-[16px] px-4 shadow-sm shadow-[#343434] outline-none focus:ring-2 focus:ring-blue-400" onChange={onChangeHandler} name = "street" value = {formData.street}/>

      <input type="text" placeholder="Land-Mark" required
        className="w-full sm:w-[48%] h-[48px] rounded-md bg-white text-black placeholder-gray-400 text-[16px] px-4 shadow-sm shadow-[#343434] outline-none focus:ring-2 focus:ring-blue-400" onChange={onChangeHandler} name = "landmark" value = {formData.landmark}/>
    </div>

    {/* City & Pincode */}
    <div className="flex flex-col sm:flex-row gap-3">
      <input type="text" placeholder="City" required
        className="w-full sm:w-[48%] h-[48px] rounded-md bg-white text-black placeholder-gray-400 text-[16px] px-4 shadow-sm shadow-[#343434] outline-none focus:ring-2 focus:ring-blue-400" onChange={onChangeHandler} name = "city" value = {formData.city}/>

      <input type="text" placeholder="Pincode" required
        className="w-full sm:w-[48%] h-[48px] rounded-md bg-white text-black placeholder-gray-400 text-[16px] px-4 shadow-sm shadow-[#343434] outline-none focus:ring-2 focus:ring-blue-400" onChange={onChangeHandler} name = "pincode" value = {formData.pincode}/>
    </div>

    {/* State */}
    <div className="flex">
      <input type="text" placeholder="State" required
        className="w-full sm:w-[48%] h-[48px] rounded-md bg-white text-black placeholder-gray-400 text-[16px] px-4 shadow-sm shadow-[#343434] outline-none focus:ring-2 focus:ring-blue-400" onChange={onChangeHandler} name = "state" value = {formData.state}/>
    </div>

    {/* Contact */}
    <div className="flex">
      <input type="text" placeholder="Contact Number" required
        className="w-full sm:w-[48%] h-[48px] rounded-md bg-white text-black placeholder-gray-400 text-[16px] px-4 shadow-sm shadow-[#343434] outline-none focus:ring-2 focus:ring-blue-400" onChange={onChangeHandler} name = "contact" value = {formData.contact}/>
    </div>

    <div className="w-full flex justify-center mt-4">
  
</div>
  </form>
</div>
      <div  className="w-full lg:w-1/2 flex justify-center lg:justify-start">
        <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[80%] bg-slate-700 rounded-xl p-4 sm:p-6 text-white">
              <h2 className="text-lg sm:text-xl font-semibold border-b border-gray-500 pb-3">
        Cart Total
      </h2>

      <div className="flex flex-col gap-2 sm:gap-3 text-xs sm:text-sm">
        <div className="flex items-center justify-between">
          <span className="text-gray-300">Subtotal</span>
          <span className="font-medium">{currency} {getcartAmount()}.00</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-300">Delivery Fee</span>
          <span className="font-medium">
            {currency} {delivery_fee}.00
          </span>
        </div>

        <div className="flex items-center justify-between border-t border-gray-500 pt-3 text-sm sm:text-base font-semibold">
          <span>Total</span>
          <span className="text-[#9ff9f9]">{currency} {getcartAmount() === 0 ? 0 : getcartAmount() + delivery_fee}.00</span>
        </div>

      <button onClick={() => setmethod("razorpay")}
  className={`w-full sm:w-auto px-6 py-3
  flex items-center justify-center gap-2
  bg-white hover:bg-gray-100
  text-[#2D5BE3] font-semibold text-sm sm:text-base
  rounded-lg shadow-md shadow-blue-500/30
  border border-[#2D5BE3]
  active:scale-95 transition-all duration-200
  ${method === "razorpay" ? "border-[5px] border-blue-900 rounded-sm" : ""}
`}
>
  <img
    src="https://razorpay.com/favicon.ico"
    alt="Razorpay"
    className="w-5 h-5 rounded-sm"
  />
  Pay with Razorpay
</button>

<h4 className="w-full text-center text-grey text-sm sm:text-base font-small mt-0">
  Click on Razorpay! Before clicking on Place Order
</h4>

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
       
  
      </div>
        </div>
      </div>

</div>
    )
}

export default PlaceOrder