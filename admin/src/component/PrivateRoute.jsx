import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AdminDataContext } from "../Context/AdminContext";

const PrivateRoute = ({ children }) => {
  const { adminData } = useContext(AdminDataContext);

  return adminData ? children : <Navigate to="/" />;
};

export default PrivateRoute;