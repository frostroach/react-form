import React from "react";
import SignupForm from "./components/SignupForm/SignupForm";
import { Container, Typography } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de cadastro
      </Typography>
      <SignupForm />
    </Container>
  );
}

export default App;
