import React, { useContext, useEffect, useState } from "react";
import { ShopDataContext } from "../context/ShopContext";
import { AuthDataContext } from "../context/AuthContext";
import axios from "axios";

const MyOrder = () => {
  const [orderdata, setorderdata] = useState([]);
  const { currency , delivery_fee} = useContext(ShopDataContext);
  const { ServerUrl } = useContext(AuthDataContext);

  const loadOrderData = async () => {
    try {
      const result = await axios.post(ServerUrl + "/api/order/userOrder", {}, { withCredentials: true });
      if (result.data) {
        let allOrdersItem = [];
        result.data.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["date"] = order.date;
            allOrdersItem.push(item);
          });
        });
        setorderdata(allOrdersItem.reverse());
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto px-3 sm:px-6 mt-6 pb-10">
      <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide mt-3 text-center mb-6">
        My Orders
      </h1>

      <div className="flex flex-col gap-3 sm:gap-4">
        {orderdata.map((item, index) => (
          <div
            key={index}
            className="w-full flex flex-row items-center gap-3 sm:gap-5 bg-[#51808048] border border-gray-600 py-3 sm:py-4 px-3 sm:px-6 rounded-2xl"
          >
            {/* Image */}
            <img
              src={item.image1}
              alt=""
              className="w-[70px] h-[100px] sm:w-[110px] sm:h-[150px] md:w-[140px] md:h-[190px] rounded-md object-cover shrink-0"
            />

            {/* Details */}
            <div className="flex flex-col gap-1 sm:gap-2 flex-1 min-w-0">
              <p className="text-[14px] sm:text-[18px] md:text-[22px] text-[#f3f9fc] font-medium truncate">
                {item.name}
              </p>
              <p className="text-[12px] sm:text-[15px] md:text-[18px] text-[#aaf5fa]">
                {currency} {item.price + delivery_fee}.00
              </p>
              <p className="text-[12px] sm:text-[15px] md:text-[18px] text-[#aaf5fa]">
                Qty: {item.quantity}
              </p>
              <p className="text-[11px] sm:text-[14px] md:text-[16px] text-[#aaf5fa]">
                Date:{" "}
                <span className="text-[#e4fbfb]">
                  {new Date(item.date).toDateString()}
                </span>
              </p>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-400 shrink-0"></span>
                <p className="text-[11px] sm:text-[14px] md:text-[16px] text-green-400 font-medium">
                  {item.status}
                </p>
              </div>
            </div>

             <div className="shrink-0 ml-auto"> 
              <button 
                className="px-2.5 py-1 sm:px-4 sm:py-2 rounded-md text-[10px] sm:text-[13px] md:text-[16px] text-white border border-gray-500 hover:bg-slate-600 active:bg-slate-700 cursor-pointer whitespace-nowrap transition" 
                onClick={loadOrderData} 
              >   
                Track Order 
              </button> 
            </div> 

          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrder;