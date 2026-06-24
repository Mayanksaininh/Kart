import React from "react";
import { createContext } from "react";





export const AuthDataContext = createContext()

export const AuthContextProvider = ({children}) => {

    let ServerUrl = "http://localhost:8000"

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

