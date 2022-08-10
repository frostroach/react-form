import React, { useState } from "react";

import Button from "@mui/material/Button";
import { FormControlLabel, Switch, TextField } from "@mui/material";
import { UserForm } from "../../models/user";

type SignupFormProps = {
  onSubmitForm: (data: UserForm) => void;
};

const SignupForm: React.FC<SignupFormProps> = ({ onSubmitForm }) => {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [sales, setSales] = useState(true);
  const [newsletter, setNewsletter] = useState(true);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const data = {
          name,
          surname,
          cpf,
          sales,
          newsletter,
        };
        onSubmitForm(data);
      }}
    >
      <TextField
        id="name"
        onChange={({ target }) => {
          const tmpName = target.value;
          setName(tmpName);
        }}
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
        id="surname"
        label="Sobrenome"
        variant="outlined"
        onChange={({ target }) => {
          const tmpSurname = target.value;
          setSurname(tmpSurname);
        }}
        fullWidth
        margin="normal"
      />

      <TextField
        id="cpf"
        label="Cpf"
        onChange={({ target }) => {
          const tmpCpf = target.value;
          setCpf(tmpCpf);
        }}
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={sales}
            name="sales"
            color="primary"
            onChange={({ target }) => setSales(target.checked)}
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={newsletter}
            name="newsletter"
            color="primary"
            onChange={({ target }) => setNewsletter(target.checked)}
          />
        }
      />

      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
};

export default SignupForm;
