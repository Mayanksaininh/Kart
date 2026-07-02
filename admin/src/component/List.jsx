import React, { useContext, useEffect } from "react";
import SideBar from "./SideBar";
import { useState } from "react";
import { AuthDataContext } from "../Context/AuthContext";
import axios from "axios";


const List = () =>{

    const[list , setlist] = useState([])
    const {ServerUrl} = useContext(AuthDataContext)

    const fetchList = async()=>{
        try {
            const result = await axios.get(ServerUrl + "/api/product/listproduct" , {} , {withCredentials : true})
            setlist(result.data)
            console.log(result.data);
        } catch (error) {
            console.log("Error in fetching List" );
        }
    }

    const removelist = async(id) =>{
      try {
        const result = await axios.post(`${ServerUrl}/api/product/removeproduct/${id}` , {withCredentials : true})
        if(result.data){
          fetchList()
        }
        else{
          console.log("Failed to remove product");
        }
      } catch (error) {
        console.log("Remove Product Error");
      }
    }


useEffect(() => {
    fetchList()
} , [])


    return(
        <div className="flex">
      
      
      <SideBar />

      {/* Main Content */}
      <div className="
        w-full min-h-screen py-10
        px-4 sm:px-6 md:px-10
        ml-[60%] sm:ml-[40%] md:ml-[25%] lg:ml-[18%]
      ">

        {/* Heading */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center sm:text-left mb-6 border-b border-gray-700 pb-3 mt-12">
          Listed Products
        </h1>
  {
  list.map((item, index) => {
    return (
      <div
        key={index}
        className="w-[90%] h-[180px] md:h-[220px] bg-slate-600 rounded-xl flex items-center gap-[15px] md:gap-[30px] p-[15px] md:px-[30px] mb-4"
      >
        <img
          src={item.image1}
          alt=""
          className="w-[120px] md:w-[106px] h-full object-cover rounded-lg"
        />
        <div className="w-[90%] h-[80%] flex flex-col items-start justify-center gap-[2px] -mt-8">
            <div className="w-[100%] md:text-[20px] text-[15px] text-[#bef0f3]">
                Name - {item.name}
            </div>
            <div className="md:text-[17px] text-[15px] text-[#bef3da]">
               Category - {item.category}
            </div>
             <div className="md:text-[17px] text-[15px] text-[#bef3da]">
                ₹ {item.price}
            </div>
               <div className="md:text-[17px] text-[15px] text-[#bef3da]">
                Description - {item.description}
            </div>

        </div>
      <div className="w-[10%] h-full flex items-center justify-center text-2xl text-white">
       <span className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-red-300 hover:text-black cursor-pointer transition" onClick={() => removelist(item._id)}>
              X
       </span>
        </div>


      </div>
    );
  })
}
        </div>
        </div>
    )
}

export default List