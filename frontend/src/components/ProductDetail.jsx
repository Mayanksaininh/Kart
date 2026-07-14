import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ShopDataContext } from "../context/ShopContext";

const ProductDetail = () =>{
    const {productId} = useParams()
    const {product,currency} = useContext(ShopDataContext)
    const [productData , setproductData] = useState(false)
    
    const [image, setimage] = useState("")
    const [image1, setimage1] = useState("")
    const [image2, setimage2] = useState("")
    const [image3, setimage3] = useState("")
    const [image4, setimage4] = useState("")  

    
    const fetchproductData = () => {
    if (!product || product.length === 0) return;

    const found = product.find((item) => item._id === productId);

    if (found) {
        setproductData(found);
        setimage(found.image1);
        setimage1(found.image1);
        setimage2(found.image2);
        setimage3(found.image3);
        setimage4(found.image4);
    }
};

   useEffect(() => {
    fetchproductData();
}, [productId, product]);

    return productData ? (
  <div className="w-full min-h-screen mt-[70px] flex flex-col lg:flex-row items-start justify-start gap-8 px-4 lg:px-10">

    {/* LEFT: THUMBNAILS */}
    <div className="flex lg:flex-col flex-row gap-3 order-2 lg:order-1">
      {[image1, image2, image3, image4].map((img, i) => (
        img && (
          <div key={i} className="w-[60px] h-[60px] md:w-[90px] md:h-[100px] border rounded-md overflow-hidden">
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover cursor-pointer hover:scale-105 transition"
              onClick={() => setimage(img)}
            />
          </div>
        )
      ))}
    </div>

    {/* CENTER: MAIN IMAGE */}
    <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[35%] bg-white rounded-lg flex items-center justify-center p-4 shadow-md order-1 lg:order-2">
      <img
        src={image}
        alt=""
        className="max-h-[350px] md:max-h-[420px] w-auto object-contain rounded-md"
      />
    </div>

    {/* RIGHT: PRODUCT DETAILS */}
    <div className="w-full lg:w-[30%] text-white flex flex-col gap-3 order-3">
      <h1 className="text-[24px] md:text-[32px] lg:text-[36px] font-semibold">
        {productData.name.toUpperCase()}
      </h1>

      <div>⭐⭐⭐⭐⭐</div>

      <p className="text-[20px] md:text-[26px] font-semibold">
        {currency} {productData.price}
      </p>

      <p className="text-[16px] md:text-[18px] text-gray-300 leading-relaxed">
            {productData.description}
      </p>

      <button className="text-[16px] cursor-pointer bg-[#495b61c9] py-[10px] px-[20px] rounded-2xl mt-[10px] border border-[#80808049] text-white shadow-md shadow-black 
      hover:bg-[#5f737a] hover:shadow-lg hover:scale-105 transition-all duration-200 active:bg-slate-300">
             Add to Cart
      </button>

      <div className="mt-4 text-sm text-gray-300 flex flex-col gap-1">
            <p>⚡ Hurry! This product is selling fast</p>
            <p>✔ Premium Quality Material</p>
            <p>✔ Lightweight & Durable</p>
            <p>🔄 7-day easy return & exchange</p>
            <p>🔒 100% Secure Payments</p>
            <p>✔ Trusted by many customers</p>

      </div>

    </div>
  </div>
) : (
  <div className="opacity-0"></div>
);
}

export default ProductDetail