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
      
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="
        w-full min-h-screen py-10
        px-4 sm:px-6 md:px-10
        ml-[60%] sm:ml-[40%] md:ml-[25%] lg:ml-[18%]
      ">

        {/* Heading */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center sm:text-left mb-6 border-b border-gray-700 pb-3 mt-12">
          Add Product
        </h1>

        {/* Form */}
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">

          <form className="space-y-6" onSubmit={handleAddProduct}>

            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-100">
                Name
              </label>

              <input
                type="text"
                className="mt-2 w-full rounded-md bg-white/5 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter product name" onChange={(e) => setname(e.target.value)} value={name} required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-100">
                Description
              </label>

              <input
                type="text"
                className="mt-2 w-full rounded-md bg-white/5 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter Description" onChange={(e) => setdescription(e.target.value)} value={description} required
              />
            </div>

             <div>
              <label className="block text-sm font-medium text-gray-100">
                Price
              </label>

              <input
                type="number"
                className="mt-2 w-full rounded-md bg-white/5 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter Price" onChange={(e) => setprice(e.target.value)} value={price} required
              />
            </div>

             <div>
              <label className="block text-sm font-medium text-gray-100">
                 Category
              </label>

            <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mt-2 w-full rounded-md bg-white/5 px-3 py-2 text-black" id=""
           >
            <option value="Craft">Craft</option>
            <option value="Art">Art</option>
           </select>
          </div>


            <div className="flex gap-3 flex-wrap">
             <label htmlFor="image1" className="block text-sm font-medium text-gray-100">
               <img
                     src={image1 ? URL.createObjectURL(image1) : "https://png.pngtree.com/png-vector/20250415/ourmid/pngtree-icon-upload-clipart-blue-button-vector-file-png-image_15952470.png"}
                    className="w-20 h-20 object-cover rounded-lg border cursor-pointer"
                />
                <input 
                type="file"
                id="image1" hidden onChange={(e) => setimage1(e.target.files[0])} required/>
            </label>

            <label htmlFor="image2" className="block text-sm font-medium text-gray-100">
               <img
                    src={image2 ? URL.createObjectURL(image2) : "https://png.pngtree.com/png-vector/20250415/ourmid/pngtree-icon-upload-clipart-blue-button-vector-file-png-image_15952470.png"}
                    className="w-20 h-20 object-cover rounded-lg border cursor-pointer"
                />
                <input 
                type="file"
                id="image2" hidden onChange={(e) => setimage2(e.target.files[0])} required/>
            </label>

            <label htmlFor="image3" className="block text-sm font-medium text-gray-100">
               <img
                    src={image3 ? URL.createObjectURL(image3) : "https://png.pngtree.com/png-vector/20250415/ourmid/pngtree-icon-upload-clipart-blue-button-vector-file-png-image_15952470.png"}
                    className="w-20 h-20 object-cover rounded-lg border cursor-pointer"
                /> 
                <input
                type="file"
                id="image3" hidden onChange={(e) => setimage3(e.target.files[0])} required/>
            </label>

            <label htmlFor="image4" className="block text-sm font-medium text-gray-100">
                <img
                         src={image4 ? URL.createObjectURL(image4) : "https://png.pngtree.com/png-vector/20250415/ourmid/pngtree-icon-upload-clipart-blue-button-vector-file-png-image_15952470.png"}
                        className="w-20 h-20 object-cover rounded-lg border cursor-pointer"
                />
                <input 
                type="file"
                id="image4" hidden onChange={(e) => setimage4(e.target.files[0])} required/>
            </label>
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