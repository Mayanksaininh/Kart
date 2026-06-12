import React from "react";
import { Routes , Route } from "react-router-dom";
import Registration from "./Registration";
import Home from "./Home";
import Login from "./Login";
import Header from "./Header";
import PrivateRoute from "./PrivateRoute";

const Body = () =>{
    return (
        <div className="flex flex-col h-screen bg-gray-700">
        <>
        <Header/>
        <Routes>
            <Route path = '/' element = {<Login/>}/>
            {/* <Route path = '/home' element = {<Home/>}/> */}
            <Route path = '/signup' element = {<Registration/>}/>
              <Route
            path="/home"
            element={
            <PrivateRoute>
               <Home />
            </PrivateRoute>
    }
  />
        </Routes> 
        
        </>

        </div>
    )
}


export default Body