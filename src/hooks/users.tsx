import React, { createContext, useContext, useState } from "react";
import { User } from "../models/user";

type UserProps = {
  addUser: (userData: User) => void;
  deleteUser: (userId: string) => void;
  editUser: (userData: User) => void;
  users: User[];
};

type UserProviderProps = {
  children: React.ReactNode;
};

const UserContext = createContext<UserProps>({} as UserProps);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([
    {
      cpf: "12345678911",
      id: "712838718jjx",
      name: "Vitor",
      surname: "Testes",
      newsletter: true,
      sales: true,
    },
  ]);

  const findUser = (userData: User): boolean => {
    const userExist = users.find((user) => user.cpf === userData.cpf);
    return userExist ? true : false;
  };

  const editUser = async (userData: User): Promise<void> => {
    try {
      const updatedUsers = users.filter((user) => user.id !== userData.id);
      updatedUsers.push(userData);
      setUsers(updatedUsers);
    } catch (err: any) {
      throw new Error(err);
    }
  };

  const addUser = async (userData: User): Promise<void> => {
    try {
      const checkUser = findUser(userData);
      if (checkUser === true) {
        // eslint-disable-next-line no-throw-literal
        throw "Há um usuário com este CPF!";
      } else {
        setUsers([...users, userData]);
      }
    } catch (err: any) {
      throw new Error(err);
    }
  };

  const deleteUser = (userId: string): void => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  return (
    <UserContext.Provider value={{ users, addUser, deleteUser, editUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = (): UserProps => {
  const context = useContext(UserContext);
  return context;
};
