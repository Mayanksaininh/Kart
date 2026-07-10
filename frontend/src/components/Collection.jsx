import React, { useState } from "react";

const Collection = () =>{

    const [showfilter , setshowfilter] = useState(false)

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
        <div className="w-full md:w-[30vw] lg:w-[20vw] min-h-screen p-[20px] border-r text-[#aaf5fa] fixed top-16 left-0 z-40">
             <p className="text-[25px] font-semibold flex gap-[5px] items-center justify-start cursor-pointer" onClick={() => setshowfilter(prev =>! prev)}>
                FILTER
             </p>

           <div
                className={`border border-[#dedcdc] pl-3 py-2 mt-4 rounded-md bg-slate-600 w-fit ${
                showfilter ? "block" : "hidden md:block"
                 }`}
                    >
                 <p className="text-[15px] text-[#f8fafa] mb-2">
                     CATEGORIES
                </p>

            <div className="w-[180px] flex flex-col gap-[6px]">
                <p className="flex items-center gap-[8px] text-[15px] font-light">
                <input type="checkbox" value={"Craft"} className="w-3 h-3"/>
                     Craft
                </p>

                <p className="flex items-center gap-[8px] text-[15px] font-light">
                <input type="checkbox" value={"Art"} className="w-3 h-3"/>
                     Art
                </p>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Collection      