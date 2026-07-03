import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthDataContext } from "./AuthContext";
import axios from "axios";

export const ShopDataContext = createContext() 


function ShopContext ({children}) {
    
    const [product,setproduct] = useState([])
    const {ServerUrl} = useContext(AuthDataContext)
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

    useEffect(() => {
        getproduct()
    } ,[])


const value = {
    product , currency , delivery_fee , getproduct
}
    return (
        
            <ShopDataContext.Provider value = {value}>
            {children}
            </ShopDataContext.Provider>
        
    )
}

export default ShopContext