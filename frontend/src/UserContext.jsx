import { createContext, useState, useEffect } from "react";
import axios from "axios";
// import { data } from "autoprefixer";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!user) {
      const { data } = axios.get("/profile").then(({ data }) => {
        setUser(data);
        setReady(true);
      });
      setUser(data);
    }
  }, [user]);
  // zedt user fi west [] line 19
  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  );
}
