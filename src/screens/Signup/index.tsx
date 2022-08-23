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
import { useLocation } from "react-router-dom";
import formatToCPF from "../../utils/formatters/formatToCPF";

type StateProps = {
  userData?: User;
};

const Signup: React.FC = () => {
  const { addUser, editUser } = useUsers();

  let userInfo: User | undefined;

  const location = useLocation();

  const state = location?.state as StateProps;
  if (state) {
    const { userData } = state;
    if (userData) {
      userInfo = { ...userData, cpf: formatToCPF(userData.cpf) };
    }
  }

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
      if (userInfo) {
        await editUser(user);
      } else {
        await addUser(user);
      }
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
        userData={userInfo}
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
          Usuário {userInfo ? "editado" : "cadastrado"}!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Signup;
