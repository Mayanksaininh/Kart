import React from "react";
import { createContext } from "react";




export const authDataContext = createContext()

export const AuthContext = ({children}) => {

    let ServerUrl = "http://localhost:8000"

    let value = {
        ServerUrl
    }

    return(
        <div>
            <authDataContext.Provider value = {value}>
             {children}
            </authDataContext.Provider>
        </div>
    )
}

