import React from "react";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const SignupForm: React.FC = () => {
  return (
    <form>
      <label>Nome</label>
      <input type="text" />

      <label>Sobrenome</label>
      <input type="text" />

      <label>CPF</label>
      <input type="text" />

      <label>Promoções</label>
      <input type="checkbox" />

      <label>Novidades</label>
      <input type="checkbox" />

      <Button variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
};

export default SignupForm;
