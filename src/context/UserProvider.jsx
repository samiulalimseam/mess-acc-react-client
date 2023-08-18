import React, { createContext, useContext, useEffect, useState } from "react";
const USER_CONTEXT = createContext();
const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState();

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data=> setUserData(data))
  },[])
  const value = {
    userData,
  };
  return (
    <USER_CONTEXT.Provider value={value}>{children}</USER_CONTEXT.Provider>
  );
};

export const useUserData = () => {
  const context = useContext(USER_CONTEXT);
  return context;
};

export default UserProvider;
