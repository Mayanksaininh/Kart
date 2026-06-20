import axios from "axios";
import React, { useEffect } from "react";
import { createContext } from "react";
import { useState  } from "react";


export const AdminDataContext = createContext()

export const AdminContextProvider = ({children}) => {

    let[adminData , setadminData] = useState(null)
    let [loading, setloading] = useState(true);

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
        finally {
        setloading(false); // ✅ important
  }
    }

    useEffect(() =>{
        getAdmin()
    } , [] )
   
    let value = {
        adminData,setadminData, loading
    }

    return(
        <div>
            <AdminDataContext.Provider value = {value}>
             {children}
            </AdminDataContext.Provider>
        </div>
    )
}

