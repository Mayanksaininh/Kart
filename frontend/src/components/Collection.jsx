import React from "react";

const Collection = () =>{
    return (
      <div className="flex justify-center items-center w-full mt-2 bg-grey-900">
            <input
               type="text"
                     placeholder="Search..."
                     className="px-3 py-1 rounded-lg outline-none bg-white"
             />
             
         <button className="bg-red-500 px-3 py-1 rounded-lg text-white hover:bg-red-600">
                      Search
         </button>
        <div className="w-full md:w-[30vw] lg:w-[20vw] min-h-screen p-[20px] border-r border-gray-400 text-[#aaf5fa] fixed top-0 left-0 z-40">
        </div>
        </div>
    )
}

export default Collection      