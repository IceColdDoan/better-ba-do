"use client";

import { createContext, useContext } from "react";
import { User } from "firebase/auth";
import { useUserData } from "./hooks";

interface UserContextType {
    user: User | null | undefined;
    username: string | null;
}

export const UserContext = createContext<UserContextType>({user: null, username: null});

export const AuthContextProvider = ({ children }: {children: React.ReactNode}) => {
   const userData = useUserData();

  return(
    <UserContext.Provider value={userData} >
      {children}
    </UserContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(UserContext);
}