import React, { useContext } from "react";
import { ShopDataContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

const CartTotal = () => {

    const {currency , delivery_fee, getcartAmount} = useContext(ShopDataContext)
    const navigate = useNavigate()
    return(
        <div>
            <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[40%] xl:w-[35%] bg-slate-700 rounded-xl p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 text-white mx-auto lg:mx-0">
      
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
          <span className="text-[#9ff9f9]">{currency} {getcartAmount() === 0 ? 0 : getcartAmount() + delivery_fee}</span>
        </div>
      </div>

      <button
        onClick={() => navigate("/placeorder")}
        disabled={getcartAmount() === 0}
        className="w-full py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold text-xs sm:text-sm hover:opacity-90 active:scale-[0.98] transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Proceed to Checkout →
      </button>

      <p className="text-[10px] sm:text-xs text-gray-400 text-center">
        🔒 Secure checkout — 100% safe & encrypted
      </p>
    </div>
        </div>
    )
}

export default CartTotal