import React from "react";

import Button from "@mui/material/Button";
import { FormControlLabel, Switch, TextField } from "@mui/material";

const SignupForm: React.FC = () => {
  return (
    <form>
      <TextField
        id="name"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
        id="surname"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
        id="cpf"
        label="Cpf"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <FormControlLabel
        label="Promoções"
        control={<Switch defaultChecked name="sales" color="primary" />}
      />

      <FormControlLabel
        label="Novidades"
        control={<Switch defaultChecked name="newsletter" color="primary" />}
      />

      <Button variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
};

export default SignupForm;
