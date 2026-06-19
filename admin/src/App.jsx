import React from "react";
import Login from "./component/Login";
import Header from "./component/Header";

const App = () =>{
    return (
        <>
         <div className="flex flex-col min-h-screen bg-gray-700">
            <Header/>
        <Login />
         </div>
        
        </>
    )
}

export default App