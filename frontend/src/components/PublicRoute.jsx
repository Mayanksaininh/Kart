import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { userDataContext } from "../context/UserContext";


const PublicRoute = ({ children }) => {
  const { userData, loading } = useContext(userDataContext);

  if (loading) {
    return <div className="text-white text-center mt-10">Loading...</div>;
  }

  return !userData ? children : <Navigate to="/home" replace />;
};

export default PublicRoute