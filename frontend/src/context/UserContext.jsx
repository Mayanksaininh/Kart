import React, { createContext, useContext, useState } from "react";
import  { AuthDataContext } from "./AuthContext";
import axios from "axios";
import { useEffect } from "react";

export const userDataContext = createContext()
function UserContext({children}) {

    const [userData , setuserData] = useState()
    const {serverUrl} = useContext(AuthDataContext)

     const  getCurrentUser = async() => {
        try {
            const result = await axios.post(serverUrl + "/api/user/getCurrentUser" , {withCredentials : true})
            setuserData(result.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getCurrentUser()
    },[])

    const value = { 
        userData , setuserData, getCurrentUser
    }

    return (
        <div>
            <userDataContext.Provider value = {value}>
                {children}
            </userDataContext.Provider>
        </div>
    )
}

export default UserContext