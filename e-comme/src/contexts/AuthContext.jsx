import React, { createContext, useContext, useEffect, useState } from "react";
import { use } from "react";
import { useNavigate } from "react-router-dom";

const initContext = createContext(null);
export const useAuthContext = () => useContext(initContext);

export function AuthContext({ children }) {
  //Store token
  const [token, setToken] = useState(null);

  //update login status
  const [isLoggedin, setLoginState] = useState(false);

  //login function
  let loginIn = (usrToken) => {
    setToken(usrToken);
    setLoginState(true);
    localStorage.setItem("token", usrToken);
    navg("/");
  };

  //Login Guard
  let loginGuard = () => {
    useEffect(() => {
      if (isLoggedin === false) {
        let loginToken = localStorage.getItem("token");
        if (loginToken) {
          loginIn(loginToken);
        } else {
          Loggedout();
        }
      }
    }, []);
  };

  //Logout function
  let navg = useNavigate();
  let Loggedout = () => {
    setToken(null);
    setLoginState(false);
    localStorage.removeItem("token");
    navg("/login");
  };

  return (
    <>
      <initContext.Provider
        value={{
          token,
          setToken,
          isLoggedin,
          setLoginState,
          loginIn,
          Loggedout,
          loginGuard,
        }}
      >
        {children}
      </initContext.Provider>
    </>
  );
}
