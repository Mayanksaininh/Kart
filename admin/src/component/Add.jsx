import React, { useContext } from "react";
import SideBar from "./SideBar";
import { useState } from "react";
import { AuthDataContext } from "../Context/AuthContext";
import axios from "axios"

const Add = () => {

    const [image1 , setimage1] = useState(null)
    const [image2 , setimage2] = useState(null)
    const [image3 , setimage3] = useState(null)
    const [image4 , setimage4] = useState(null)
    const [name, setname] = useState("")
    const [description, setdescription] = useState("")
    const [price, setprice] = useState("")
    const [category, setCategory] = useState("Craft");

    const {ServerUrl} = useContext(AuthDataContext)

    const handleAddProduct = async(e) =>{
      e.preventDefault()
      try {
        let formData = new FormData()
        formData.append("name" , name)
        formData.append("description" , description)
        formData.append("price" , price)
        formData.append("category" , category)
        formData.append("image1" , image1)
        formData.append("image2" , image2)
        formData.append("image3" , image3)
        formData.append("image4", image4)

        const result = await axios.post(ServerUrl + "/api/product/addproduct" , formData , {withCredentials : true})
        if(result.data){
          setname("")
          setdescription("")
          setprice("")
          setimage1(null)
          setimage2(null)
          setimage3(null)
          setimage4(null)
          setCategory("Craft")
        }
      } catch (error) {
        console.log("Adding product error");
      }
    } 

  return (
    <div className="flex">
      
      <SideBar />

      <div className="
         w-full min-h-screen py-6 sm:py-10
         px-3 sm:px-6 md:px-10
        ml-[120px] sm:ml-[40%] md:ml-[25%] lg:ml-[18%]">

        <h1 className="text-lg sm:text-2xl md:text-3xl font-semibold text-white text-center sm:text-left mb-4 sm:mb-6 border-b border-gray-700 pb-3 mt-10 sm:mt-12">
          Add Product
        </h1>

        <div className="w-full max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl">

          <form className="space-y-4 sm:space-y-6" onSubmit={handleAddProduct}>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-100">Name</label>
              <input
                type="text"
                className="mt-1 sm:mt-2 w-full rounded-md bg-white/5 px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter product name" onChange={(e) => setname(e.target.value)} value={name} required
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-100">Description</label>
              <input
                type="text"
                className="mt-1 sm:mt-2 w-full rounded-md bg-white/5 px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter Description" onChange={(e) => setdescription(e.target.value)} value={description} required
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-100">Price</label>
              <input
                type="number"
                className="mt-1 sm:mt-2 w-full rounded-md bg-white/5 px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="₹ 2000" onChange={(e) => setprice(e.target.value)} value={price} required
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-100">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1 sm:mt-2 w-full rounded-md bg-white/5 px-3 py-2 text-black text-sm"
              >
                <option value="Craft">Craft</option>
                <option value="Art">Art</option>
              </select>
            </div>

            <div className="flex gap-2 sm:gap-3 flex-wrap">
              {[
                { id: "image1", state: image1, setter: setimage1 },
                { id: "image2", state: image2, setter: setimage2 },
                { id: "image3", state: image3, setter: setimage3 },
                { id: "image4", state: image4, setter: setimage4 },
              ].map(({ id, state, setter }) => (
                <label key={id} htmlFor={id} className="block text-sm font-medium text-gray-100">
                  <img
                    src={state ? URL.createObjectURL(state) : "https://png.pngtree.com/png-vector/20250415/ourmid/pngtree-icon-upload-clipart-blue-button-vector-file-png-image_15952470.png"}
                    className="w-14 h-14 sm:w-20 sm:h-20 object-cover rounded-lg border cursor-pointer"
                  />
                  <input type="file" id={id} hidden onChange={(e) => setter(e.target.files[0])} required />
                </label>
              ))}
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 py-2 rounded-md text-white text-sm sm:text-base"
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