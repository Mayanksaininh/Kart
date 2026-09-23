import React, { useContext } from "react";
import Login from "./component/Login";
import Header from "./component/Header";
import { Routes , Route } from "react-router-dom";
import PrivateRoute from "./component/PrivateRoute.jsx"
import PublicRoute from "./component/PublicRoute.jsx";
import List from "./component/List"
import Orders from "./component/Orders"
import Add from "./component/Add"
import { ToastContainer, toast } from 'react-toastify';
import { AdminDataContext } from "./Context/AdminContext.jsx";


const App = () =>{

  const {adminData} = useContext(AdminDataContext)
    

    return (
        <>

         <div className="flex flex-col min-h-screen bg-gray-700">
        <Header/>

         <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          theme="white"
          style={{ marginTop: "64px" }}
        />

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