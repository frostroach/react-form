import React, { createContext, useContext, useState } from "react";
import { User } from "../models/user";

type UserProps = {
  addUser: (userData: User) => void;
  users: User[];
};

type UserProviderProps = {
  children: React.ReactNode;
};

const UserContext = createContext<UserProps>({} as UserProps);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (userData: User): void => {
    const findUser = users.find((user) => user.id === userData.id);
    if (!findUser) {
      setUsers([...users, userData]);
    }
  };

  return (
    <UserContext.Provider value={{ users, addUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = (): UserProps => {
  const context = useContext(UserContext);
  return context;
};
