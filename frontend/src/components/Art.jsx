import React from "react";

const Art = () =>{
    return (
      <div className="flex justify-center items-center w-full mt-2 bg-grey-900">
            <input
               type="text"
                     placeholder="Search Art products..."
                     className="px-3 py-1 rounded-lg outline-none bg-white"
             />
             
         <button className="bg-red-500 px-3 py-1 rounded-lg text-white hover:bg-red-600">
                      Search
         </button>

        </div>
    )
}

export default Art       