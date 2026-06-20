import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AdminDataContext } from "../Context/AdminContext";

const PrivateRoute = ({ children }) => {
  const { adminData,loading } = useContext(AdminDataContext);

  if (loading) {
  return <h1 style={{color:"white"}}>Loading...</h1>; // ya spinner
}

  return adminData ? children : <Navigate to="/" />;
};

export default PrivateRoute;