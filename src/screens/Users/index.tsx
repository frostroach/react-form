import React from "react";
import { UsersStyled as Styled } from "./styled";

import { Container, Typography } from "@mui/material";

import { User as UserModel } from "../../models/user";

import User from "../../components/User";

import { PersonAdd as AddIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useUsers } from "../../hooks/users";

const Users: React.FC = () => {
  const { users } = useUsers();

  const handleUserEdit = (userId: string): void => {
    console.log("edit user", userId);
  };

  const handleUserDelete = (userId: string): void => {
    console.log("delete user", userId);
  };

  return (
    <Container maxWidth="sm">
      <Styled.HeaderContainer>
        <div></div>
        <Typography
          variant="subtitle1"
          component="h4"
          align="center"
          alignSelf="center"
        >
          Usuário cadastrados
        </Typography>

        <Link to={"/signup"}>
          <Styled.AddButton color="primary" variant="contained">
            <AddIcon sx={{ color: "#fff" }} />
          </Styled.AddButton>
        </Link>
      </Styled.HeaderContainer>

      {users?.map((user) => (
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
