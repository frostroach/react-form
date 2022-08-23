import React from "react";

import { Container, Typography } from "@mui/material";

import User from "../../components/User";
import { User as UserModel } from "../../models/user";

import { useUsers } from "../../hooks/users";
import { useNavigate } from "react-router-dom";

const Users: React.FC = () => {
  const { users, deleteUser } = useUsers();
  const navigate = useNavigate();

  const handleUserEdit = (user: UserModel): void => {
    navigate("/signup", {
      state: {
        userData: user,
      },
    });
  };

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
          onPressEdit={handleUserEdit}
          key={user.id}
        />
      ))}
    </Container>
  );
};

export default Users;
