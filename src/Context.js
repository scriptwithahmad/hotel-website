import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
// import Cookies from "js-cookie";
// import axios from "axios";

export const SessionData = createContext();

const Context = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const pathname = router.pathname;


//   var fetchUser = async () => {
//     try {
//       var user = await axios.post("/api/auth/profile");
//       setUser(user.data.message);
//     } catch (error) {
//       setUser(null);
//     }
//   };

//   useEffect(() => {
//     fetchUser();
//   }, [pathname]);

  return (
    <SessionData.Provider value={{ user, setUser }}>
      {children}
    </SessionData.Provider>
  );
};

export default Context;