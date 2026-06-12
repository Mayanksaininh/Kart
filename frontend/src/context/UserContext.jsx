import { createContext, useEffect, useState, useCallback } from "react";
import axios from "axios";

export const userDataContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const ServerUrl = "http://localhost:8000"; // or from env

  // ✅ stable function (important)
  const getCurrentUser = useCallback(async () => {
    try {
      const res = await axios.get(
        ServerUrl + "/api/user/getCurrentUser",
        { withCredentials: true }
      );
      setUserData(res.data);
    } catch (error) {
      setUserData(null);
    }
  }, []);

  // ✅ run only once safely
  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  const value = {
    userData,
    setUserData,     // ⚠️ fix naming (capital U)
    getCurrentUser,
  };

  return (
    <userDataContext.Provider value={value}>
      {children}
    </userDataContext.Provider>
  );
};

export default UserContextProvider;