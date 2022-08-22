import React from "react";

import { Container, Typography } from "@mui/material";

import User from "../../components/User";

import { useUsers } from "../../hooks/users";

const Users: React.FC = () => {
  const { users, deleteUser } = useUsers();

  // const handleUserEdit = (userId: string): void => {
  //   console.log("edit user", userId);
  // };

  const handleUserDelete = (userId: string): void => {
    deleteUser(userId);
  };

  return (
    <Container maxWidth="sm">
      <Typography
        variant="subtitle1"
        component="h4"
        align="center"
        alignSelf="center"
        marginBottom={2}
      >
        Usuário cadastrados
      </Typography>

      {users?.map((user) => (
        <User
          data={user}
          onPressDelete={handleUserDelete}
          //onPressEdit={handleUserEdit}
        />
      ))}
    </Container>
  );
};

export default Users;
