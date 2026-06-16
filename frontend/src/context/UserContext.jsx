import { createContext, useEffect, useState, useCallback } from "react";
import axios from "axios";

export const userDataContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const ServerUrl = "http://localhost:8000"; // or from env

  // ✅ stable function (important)
  const getCurrentUser = useCallback(async () => {
    try {
      const res = await axios.get(
        ServerUrl + "/api/user/getCurrentUser",
        { withCredentials: true}
      );
      setUserData(res.data.user);
    } catch (error) {
       if (error.response?.status === 401) {
      setUserData(null);
    }
    }
    finally {
    setLoading(false); // ✅ important
  }
  }, [ServerUrl]);

  // ✅ run only once safely
  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  const value = {
    userData,
    setUserData,     // ⚠️ fix naming (capital U)
    getCurrentUser,
    loading,
  };

  return (
    <userDataContext.Provider value={value}>
      {children}
    </userDataContext.Provider>
  );
};

export default UserContextProvider;