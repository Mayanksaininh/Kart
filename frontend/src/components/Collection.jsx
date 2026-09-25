import React, { useContext, useEffect, useState} from "react";
import { ShopDataContext } from "../context/ShopContext";
import Card from "../components/Card";

const Collection = () => {
  const [showfilter, setshowfilter] = useState(false);
  const {product} = useContext(ShopDataContext)
  const [filterProduct , setfilterProduct] = useState([])
  const [category , setcategory] = useState([])
  const [searchQuery, setsearchQuery] = useState("")

  const toggleCategory = (e)=>{
    if(category.includes(e.target.value)){
      setcategory(prev => prev.filter(item => item !== e.target.value))
    }
    else{
      setcategory(prev => [...prev , e.target.value])
    }
  }

  const applyfilter = () =>{
    let productcopy = product.slice()
    if(category.length > 0) {
      productcopy = productcopy.filter(item => category.includes(item.category))
    }
    setfilterProduct(productcopy)
  }

  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase()
    if (!query) {
      // empty search — puri collection dikhao (category filter ke saath)
      applyfilter()
      return
    }
    let productcopy = product.slice()
    if (category.length > 0) {
      productcopy = productcopy.filter(item => category.includes(item.category))
    }
    productcopy = productcopy.filter(item =>
      item.name.toLowerCase().includes(query) ||
      item.description?.toLowerCase().includes(query) ||
      item.category?.toLowerCase().includes(query)
    )
    setfilterProduct(productcopy)
  }

  useEffect(()=>{
    setfilterProduct(product)
  },[product])

  useEffect(() => {
    applyfilter()
    setsearchQuery("") 
  } , [category])

  return (
    <div className="flex w-full mt-2 bg-grey-900">

      {/* Sidebar */}
      <div className="md:w-[30vw] lg:w-[20vw] min-h-screen p-[20px] border-r text-[#aaf5fa] md:fixed top-16 left-0 z-40">
        <p
          className="text-[25px] font-semibold flex gap-[5px] items-center justify-start cursor-pointer"
          onClick={() => setshowfilter((prev) => !prev)}
        >
          FILTER
        </p>
        <div className={`border border-[#dedcdc] pl-3 py-2 mt-4 rounded-md bg-slate-600 w-fit ${showfilter ? "block" : "hidden md:block"}`}>
          <p className="text-[15px] text-[#f8fafa] mb-2">CATEGORIES</p>
          <div className="w-[180px] flex flex-col gap-[6px]">
            <p className="flex items-center gap-[8px] text-[15px] font-light">
              <input type="checkbox" value={"Craft"} className="w-3 h-3" onChange={toggleCategory}/>
              Craft
            </p>
            <p className="flex items-center gap-[8px] text-[15px] font-light">
              <input type="checkbox" value={"Art"} className="w-3 h-3" onChange={toggleCategory}/>
              Art
            </p>
          </div>
        </div>
      </div>


      {/* Main Content */}
      <div className="flex flex-col w-full md:ml-[30vw] lg:ml-[20vw]">
        <div className="flex items-center gap-2 p-3">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 rounded-lg outline-none bg-white w-full max-w-sm"
             value={searchQuery}
            onChange={(e) => setsearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button className="bg-red-500 px-3 py-1 rounded-lg text-white hover:bg-red-600" onClick={handleSearch}>
            Search
          </button>
         </div>
         <h1 className="text-white text-2xl font-semibold px-4">
          All Collection
         </h1>

      <div className="flex flex-wrap gap-6 p-4 justify-start">
      {
        filterProduct.map((item, index) => (
          <Card
            key={index}
            id={item._id} 
            name={item.name}
            price={item.price}
            image={item.image1}
          />
        ))
      }
    </div>
      </div>
    </div>
  );
};

export default Collection;