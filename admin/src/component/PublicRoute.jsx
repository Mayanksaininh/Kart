import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AdminDataContext } from "../Context/AdminContext";

const PublicRoute = ({ children }) => {
  const { adminData , loading} = useContext(AdminDataContext);

  if (loading) {
  return <h1 style={{color:"white"}}>Loading...</h1>;
}

  return adminData ? <Navigate to="/list" /> : children;
};

export default PublicRoute;