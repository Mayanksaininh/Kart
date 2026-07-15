import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthDataContext } from "./AuthContext";
import axios from "axios";

export const ShopDataContext = createContext() 


function ShopContext ({children}) {
    
    const [product,setproduct] = useState([])
    const {ServerUrl} = useContext(AuthDataContext)
    const [cartItem, setcartItem] = useState(() => {
        const savedCart = localStorage.getItem("cart");
         return savedCart ? JSON.parse(savedCart) : {};
        });
    let currency = '₹'
    let delivery_fee = 59

    const getproduct = async() =>{
        try {
            const result = await axios.get(ServerUrl + "/api/product/listproduct" , {withCredentials : true})
            setproduct(result.data)
        } catch (error) {
            console.log("Get product Error : " + error)
        }
    }

        const addtoCart = (itemid) => {
            const cartData = structuredClone(cartItem);

             if (!cartData[itemid]) {
                  cartData[itemid] = 1;
            }

         setcartItem(cartData);
         console.log(cartData);
    };

    const getcartcount = () => {
         let totalCount = 0;

         for (const item in cartItem) {
             if (cartItem[item] > 0) {
               totalCount += cartItem[item];
            }
    }
    return totalCount;
    };

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItem));
    }, [cartItem]);

    useEffect(() => {
        getproduct()
    } ,[])


const value = {
    product , currency , delivery_fee , getproduct , cartItem , addtoCart , getcartcount , setcartItem
}
    return (
        
            <ShopDataContext.Provider value = {value}>
            {children}
            </ShopDataContext.Provider>
        
    )
}

export default ShopContext