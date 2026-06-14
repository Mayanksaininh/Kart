import React from "react";
import { Routes , Route } from "react-router-dom";
import Registration from "./Registration";
import Home from "./Home";
import Login from "./Login";
import Header from "./Header";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Craft from "./Craft";
import Art from "./Art";

const Body = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-700">
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
          path="/craft"
          element={
            <PrivateRoute>
              <Craft />
            </PrivateRoute>
          }
        />

        <Route
          path="/art"
          element={
            <PrivateRoute>
              <Art />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};


export default Body