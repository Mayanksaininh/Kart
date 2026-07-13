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

    return productData ?(
        <div>
            <div className="lg:w-[50vh] md:w-[90vw] lg:h-[90vh] h-[50vh] mt-[70px] flex items-center justify-center md:gap-[10px] gap-[30px] flex-col-reverse lg:flex-row">
                <div className="lg:w-[20%] md:w-[80%] h-[10%] lg:h-[80%] flex items-center justify-center gap-[50px] lg:gap-[20px] lg:flex-col flex-wrap">
                    <div className="md:w-[100px] w-[50px] h-[50px] md:h-[110px] bg-slate-300 border-[1px] border-[#80808049] rounded-md">
                        <img src={image1} alt = "" className="w-[100%] h-[100%] cursor-pointer rounded-md" onClick={() => setimage(image1)}></img>
                    </div>

                     <div className="md:w-[100px] w-[50px] h-[50px] md:h-[110px] bg-slate-300 border-[1px] border-[#80808049] rounded-md">
                        <img src={image2} alt = "" className="w-[100%] h-[100%] cursor-pointer rounded-md"  onClick={() => setimage(image2)}></img>
                    </div>

                     <div className="md:w-[100px] w-[50px] h-[50px] md:h-[110px] bg-slate-300 border-[1px] border-[#80808049] rounded-md">
                        <img src={image3} alt = "" className="w-[100%] h-[100%] cursor-pointer rounded-md"  onClick={() => setimage(image3)}></img>
                    </div>

                     <div className="md:w-[100px] w-[50px] h-[50px] md:h-[110px] bg-slate-300 border-[1px] border-[#80808049] rounded-md">
                        <img src={image4} alt = "" className="w-[100%] h-[100%] cursor-pointer rounded-md"  onClick={() => setimage(image4)}></img>
                    </div>

                    <div className="lg:w-[60%] w-[80%] lg:h-[78%] h-[70%] border-[1px] border-[#80808049] rounded-md overflow-hidden">
                        <img src={image} alt = ""></img>
                    </div>
                </div>
            </div>
            <div className="lg:w-[50vw] w-[100vw] lg:h-[75vh] h-[40vh] lg:mt-[80px] flex items-start justify-start flex-col py-[20px] px-[30px] md:pb-[20px] lg:pl-[0px] lg:px-[0px] lg:py-[0px] gap-[10px]">
                <h1 className="text-[40px] font-semibold text-[aliceblue]">{productData.name.toUpperCase()}</h1>
                <div className = "flex items-center gap-1">
                    ⭐⭐⭐⭐⭐
                </div>
                <p className="text-[30px] font-semibold pl-[5px] text-white">{currency} {productData.price}</p>
            </div>
        </div>
    ) : <div className="opacity-0"></div>
}

export default ProductDetail