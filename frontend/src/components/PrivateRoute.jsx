import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { userDataContext } from "../context/UserContext";

const PrivateRoute = ({ children }) => {
    const { userData } = useContext(userDataContext);

    // userData hai toh andar jaane do, nahi toh login pe bhejo
    return userData ? children : <Navigate to="/" />;
};

export default PrivateRoute;