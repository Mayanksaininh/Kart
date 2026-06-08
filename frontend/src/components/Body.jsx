import React from "react";
import { Routes , Route } from "react-router-dom";
import Registration from "./Registration";
import Home from "./Home";
import Login from "./Login";

const Body = () =>{
    return (
        <div className="bg-gray-700 h-screen flex items-center justify-center">
        <>
        <Routes>
            <Route path = '/' element = {<Home/>}/>
            <Route path = '/login' element = {<Login/>}/>
            <Route path = '/signup' element = {<Registration/>}/>
        </Routes> 
        
        </>

        </div>
    )
}


export default Body