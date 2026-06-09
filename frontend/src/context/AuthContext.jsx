import React, { createContext } from "react";

export const AuthDataContext = createContext();

function AuthContext({ children }) {
    const ServerUrl = "http://localhost:8000"

    const value = {
        ServerUrl
    }
  return (
    <AuthDataContext.Provider value={value}>
      {children}
    </AuthDataContext.Provider>
  );
}

export default AuthContext;