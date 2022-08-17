import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

import { SignupStyled as Styled } from "./styles";

import SignupForm from "../../components/SignupForm/SignupForm";

const Signup: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de cadastro
      </Typography>
      <SignupForm
        onSubmitForm={(data) => {
          console.log("app", data);
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
