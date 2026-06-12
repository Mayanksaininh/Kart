import React, { createContext, useContext, useState } from "react";
import  { AuthDataContext } from "./AuthContext";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



export const userDataContext = createContext()
function UserContext({children}) {

    const [userData , setuserData] = useState()
    const {serverUrl} = useContext(AuthDataContext)
    const navigate = useNavigate()

     const  getCurrentUser = async() => {
        try {
            const result = await axios.get(serverUrl + "/api/user/getCurrentUser" , {withCredentials : true})
            setuserData(result.data)
             navigate("/home")
        } catch (error) {
            console.log(error);
            navigate("/") 
        }
    }

    useEffect(()=>{
        getCurrentUser()
    },[])

    const value = { 
        userData , setuserData, getCurrentUser
    }

    return (
        
            <userDataContext.Provider value = {value}>
                {children}
            </userDataContext.Provider>
        
    )
}

export default UserContext