import { Container, Typography } from "@mui/material";
import React from "react";
import User from "../../components/User";
import { User as UserModel } from "../../models/user";

const Users: React.FC = () => {
  const users: UserModel[] = [
    {
      name: "Vitor",
      surname: "Cesar",
      cpf: "12345678912",
      id: "231321",
      sales: true,
      newsletter: true,
    },
    {
      name: "Cleber",
      surname: "Neber",
      cpf: "12345678912",
      id: "2331321",
      sales: false,
      newsletter: true,
    },
    {
      name: "Craudio",
      surname: "Creiton",
      cpf: "12345678912",
      id: "233321321",
      sales: false,
      newsletter: true,
    },
  ];

  const handleUserEdit = (userId: string): void => {
    console.log("edit user", userId);
  };

  const handleUserDelete = (userId: string): void => {
    console.log("delete user", userId);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h2" align="center" marginBottom={2}>
        Usuário cadastrados
      </Typography>

      {users.map((user) => (
        <User
          data={user}
          onPressDelete={handleUserDelete}
          onPressEdit={handleUserEdit}
        />
      ))}
    </Container>
  );
};

export default Users;
