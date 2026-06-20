import axios from "axios";
import React, { useEffect } from "react";
import { createContext } from "react";
import { useState  } from "react";


export const AdminDataContext = createContext()

export const AdminContextProvider = ({children}) => {

    let[adminData , setadminData] = useState(null)

    let ServerUrl = "http://localhost:8000"

    const getAdmin = async() =>{
        try{
        const result = await axios.get(ServerUrl + "/api/user/getAdmin" , {withCredentials : true})
        setadminData(result.data)
        }
        catch(error) {
            console.log(error);
            setadminData(null)
        }
    }

    useEffect(() =>{
        getAdmin()
    } , [] )
   
    let value = {
        adminData,setadminData,getAdmin
    }

    return(
        <div>
            <AdminDataContext.Provider value = {value}>
             {children}
            </AdminDataContext.Provider>
        </div>
    )
}

