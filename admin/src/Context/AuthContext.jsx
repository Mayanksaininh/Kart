import React from "react";
import { createContext } from "react";





export const AuthDataContext = createContext()

export const AuthContextProvider = ({children}) => {

    let ServerUrl = "https://kart-backend-ymb3.onrender.com/"

    let value = {
        ServerUrl
    }

    return(
        <div>
            <AuthDataContext.Provider value = {value}>
             {children}
            </AuthDataContext.Provider>
        </div>
    )
}

