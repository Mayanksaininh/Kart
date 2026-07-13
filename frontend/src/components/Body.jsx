import React from "react";
import { Routes , Route } from "react-router-dom";
import Registration from "./Registration";
import Home from "./Home";
import Login from "./Login";
import Header from "./Header";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Collection from "./Collection";
import Contact from "./Contact";
import ProductDetail from "./ProductDetail";


const Body = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-700">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route path="/signup" element={<Registration />} />

        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route
          path="/collection"
          element={
            <PrivateRoute>
              <Collection />
            </PrivateRoute>
          }
        />

        <Route
          path="/contact"
          element={
            <PrivateRoute>
              <Contact />
            </PrivateRoute>
          }
        />

         <Route
          path="/productdetail/:productId"
          element={
            <PrivateRoute>
              <ProductDetail/>
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};


export default Body