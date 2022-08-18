import React from "react";
import { Link } from "react-router-dom";

import { Button, Container, Grid, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

import { SignupStyled as Styled } from "./styles";

import SignupForm from "../../components/SignupForm/SignupForm";

import { User } from "../../models/user";
import { useUsers } from "../../hooks/users";

const Signup: React.FC = () => {
  const { addUser } = useUsers();

  const handleAddNewUser = (user: User): void => {
    addUser(user);
  };

  return (
    <Container maxWidth="sm">
      <Styled.HeaderContainer>
        <Link to={"/"}>
          <Styled.ReturnButton color="primary" variant="contained">
            <ArrowBack sx={{ color: "#fff" }} />
          </Styled.ReturnButton>
        </Link>
        <Typography
          variant="h6"
          component="h1"
          align="center"
          alignSelf="center"
        >
          Formulário de cadastro
        </Typography>
        <div></div>
      </Styled.HeaderContainer>
      <SignupForm
        onSubmitForm={(data) => {
          handleAddNewUser(data);
        }}
      />
      <Grid container justifyContent="center" marginTop={5}>
        <Styled.Link to="/">
          <Button color="primary" variant="contained">
            Voltar ao ínicio
          </Button>
        </Styled.Link>
      </Grid>
    </Container>
  );
};

export default Signup;
