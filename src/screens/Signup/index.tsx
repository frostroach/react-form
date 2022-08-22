import React, { useState } from "react";

import {
  Alert,
  Button,
  Container,
  Grid,
  Snackbar,
  Typography,
} from "@mui/material";

import { SignupStyled as Styled } from "./styles";

import SignupForm from "../../components/SignupForm/SignupForm";

import { User } from "../../models/user";
import { useUsers } from "../../hooks/users";

const Signup: React.FC = () => {
  const { addUser } = useUsers();

  const [hasErrors, setHasErrors] = useState(false);

  const [errorMsg, setErrorMsg] = useState<string>("");

  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleErrorModal = (): void => {
    setHasErrors(!hasErrors);
  };

  const handleSuccessModal = (): void => {
    setSignupSuccess(!signupSuccess);
  };

  const handleAddNewUser = async (user: User): Promise<void> => {
    try {
      await addUser(user);
      handleSuccessModal();
    } catch (err: any) {
      handleErrorModal();
      setErrorMsg(err.message);
      setTimeout(() => {
        setErrorMsg("");
      }, 5000);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h6" component="h1" align="center" alignSelf="center">
        Formulário de cadastro
      </Typography>
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

      <Snackbar
        open={hasErrors}
        autoHideDuration={3000}
        onClose={handleErrorModal}
      >
        <Alert
          severity="error"
          sx={{ width: "100%" }}
          variant="filled"
          onClose={handleErrorModal}
        >
          {errorMsg}
        </Alert>
      </Snackbar>

      <Snackbar
        open={signupSuccess}
        autoHideDuration={3000}
        onClose={handleSuccessModal}
      >
        <Alert
          severity="success"
          sx={{ width: "100%" }}
          variant="filled"
          onClose={handleSuccessModal}
        >
          Usuário cadastrado!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Signup;
