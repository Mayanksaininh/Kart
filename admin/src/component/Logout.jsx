import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const LogOut = () =>{

    const  navigate  = useNavigate()
    const SignOut = async() =>{
        try {
            const result = await axios.get("http://localhost:8000/api/auth/logOut" , {withCredentials : true })
            console.log(result.data);
             navigate ("/")
        } catch (error) {
            console.log(error);
        }
    }


    return(
       <div className="h-16 flex items-center justify-between px-4 flex-wrap">
    <button className="text-white bg-red-500 px-1 py-1 text-sm md:px-3 md:text-base rounded"  onClick={SignOut}>
        Log Out
    </button>
        </div>
    )
}

export default LogOut