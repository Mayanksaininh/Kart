
import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { userDataContext } from "../context/UserContext";

const PrivateRoute = ({ children }) => {
  const { userData, loading } = useContext(userDataContext);

  // ⏳ Wait until API finishes
  if (loading) {
    return <div className="text-white text-center mt-10">Loading...</div>;
  }

  // ❌ Not logged in
  if (!userData) {
    return <Navigate to="/" />;
  }

  // ✅ Logged in
  return children;
};

export default PrivateRoute;