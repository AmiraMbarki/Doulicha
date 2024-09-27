import { createContext, useState, useEffect } from "react";
import axios from "axios";
//  import { data } from "autoprefixer";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!user) {
      // const { data } = axios.get("/profile").then(({ data }) => {
      //   setUser(data);
      //   setReady(true);
      // });
      // setUser(data);
      // elli louta tasli7 comment elli fou9
      axios
        .get("/profile")
        .then(({ data }) => {
          setUser(data); // Set the user state with the fetched data
          setReady(true); // Set ready to true, meaning the data is loaded
        })
        .catch((error) => {
          console.error("Error fetching the profile:", error);
        });
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  );
}
