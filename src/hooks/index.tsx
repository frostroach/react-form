import React from "react";
import { UserProvider } from "./users";

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default AppProvider;
