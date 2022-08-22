import React, { createContext, useContext, useState } from "react";
import { User } from "../models/user";

type UserProps = {
  addUser: (userData: User) => void;
  deleteUser: (userId: string) => void;
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

  const addUser = async (userData: User): Promise<void> => {
    try {
      const findUser = users.find((user) => user.cpf === userData.cpf);
      if (findUser) {
        // eslint-disable-next-line no-throw-literal
        throw "Há um usuário com este CPF!";
      }
      if (!findUser) {
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
    <UserContext.Provider value={{ users, addUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = (): UserProps => {
  const context = useContext(UserContext);
  return context;
};
