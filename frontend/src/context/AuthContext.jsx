import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthDataContext = createContext();

// Optional helper hook
export const useAuth = () => useContext(AuthDataContext);

function AuthContext({ children }) {
  const ServerUrl = "http://localhost:8000";

  const [user, setUser]       = useState(null);
  const [loading, setLoading] = useState(true);

  // On every refresh → ask the server "who am I?"
  useEffect(() => {
    axios
      .get(`${ServerUrl}/api/user/getCurrentUser`, { withCredentials: true })
      .then((res) => setUser(res.data))
      .catch(() => setUser(null))       // no cookie / expired → null
      .finally(() => setLoading(false));
  }, []);

  const value = {
    ServerUrl,
    user,
    setUser,
    loading,
  };

  return (
    <AuthDataContext.Provider value={value}>
      {children}
    </AuthDataContext.Provider>
  );
}

export default AuthContext;