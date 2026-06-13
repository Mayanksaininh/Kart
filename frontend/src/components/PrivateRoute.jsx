
import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthDataContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { userData, loading } = useContext(AuthDataContext);

  // ⏳ Wait until API finishes
  if (loading) {
    return <div className="text-white text-center mt-10">Loading...</div>;
  }

  // ❌ Not logged in
  if (!userData) {
    return <Navigate to="/" replace />;
  }

  // ✅ Logged in
  return children;
};

export default PrivateRoute;