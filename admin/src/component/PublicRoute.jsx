import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AdminDataContext } from "../Context/AdminContext";

const PublicRoute = ({ children }) => {
  const { adminData } = useContext(AdminDataContext);

  return adminData ? <Navigate to="/list" /> : children;
};

export default PublicRoute;