import React from "react";
import Login from "./component/Login";
import Header from "./component/Header";
import { Routes , Route } from "react-router-dom";
import PrivateRoute from "./component/PrivateRoute.jsx"
import PublicRoute from "./component/PublicRoute.jsx";
import List from "./component/List"
import Orders from "./component/Orders"
import Add from "./component/Add"


const App = () =>{

    

    return (
        <>
         <div className="flex flex-col min-h-screen bg-gray-700">
        <Header/>

         <Routes>
         <Route
          path="/"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />


        <Route
          path="/list"
          element={
            <PrivateRoute>
              <List/>
            </PrivateRoute>
          }
        />

         <Route
          path="/orders"
          element={
            <PrivateRoute>
              <Orders/>
            </PrivateRoute>
          }
        />

         <Route
          path="/add"
          element={
            <PrivateRoute>
              <Add/>
            </PrivateRoute>
          }
        />

        </Routes>
         </div>
        
        </>
    )
}

export default App