import React from "react";
import SideBar from "./SideBar";

const Add = () => {
  return (
    <div className="flex">
      
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="
        w-full min-h-screen py-10
        px-4 sm:px-6 md:px-10
        ml-[60%] sm:ml-[40%] md:ml-[25%] lg:ml-[18%]
      ">

        {/* Heading */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center sm:text-left mb-6 border-b border-gray-700 pb-3">
          Add Product
        </h1>

        {/* Form */}
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">

          <form className="space-y-6">

            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-100">
                Name
              </label>

              <input
                type="text"
                className="mt-2 w-full rounded-md bg-white/5 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter product name"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 py-2 rounded-md text-white"
            >
              Add Product
            </button>

          </form>

        </div>

      </div>
    </div>
  );
};

export default Add;