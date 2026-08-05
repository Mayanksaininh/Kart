import React from "react";

const PlaceOrder = () => {
    return (
        <div className="lg:w-[50%] w-[100%] h-[100%] flex-items-center justify-center lg:mt-[0px] mt-[90px]">
            <form action="" className="lg:w-[70%] w-[95%] lg:h-[70%] h-[100%]">
                <div className="py-[10px]">
                    <h1>Delivery Information</h1>
                </div>

                <div className="w-[100%] h-[70px] flex items-center justify-between px-[10px]">
                    <input type="text" placeholder="First name" className="w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text[white] text-[18px] px-[20px] shadow-sm shadow-[#343434]" required></input>
                </div>
            </form>
            
        </div>
    )
}

export default PlaceOrder