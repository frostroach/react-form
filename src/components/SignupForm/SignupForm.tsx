import React, { useState } from "react";

import Button from "@mui/material/Button";
import {
  Alert,
  FormControlLabel,
  Snackbar,
  Switch,
  TextField,
} from "@mui/material";

import { v4 as uuidV4 } from "uuid";

import { User, UserErrorProps, UserFormErrors } from "../../models/user";

import isCPF from "../../utils/validators/isCpf";
import formatToCPF from "../../utils/formatters/formatToCPF";
import { charactersCheck } from "../../utils/validators/isOnlyLetters";

type SignupFormProps = {
  onSubmitForm: (data: User) => void;
  userData?: User;
};

const SignupForm: React.FC<SignupFormProps> = ({ onSubmitForm, userData }) => {
  const defaultUserErrorsState = {
    cpf: { isValid: true, message: "" },
    name: { isValid: true, message: "" },
    surname: { isValid: true, message: "" },
  };

  const [name, setName] = useState<string>(userData ? userData.name : "");
  const [surname, setSurname] = useState<string>(
    userData ? userData.surname : ""
  );
  const [cpf, setCpf] = useState<string>(userData ? userData.cpf : "");
  const [sales, setSales] = useState(userData ? userData.sales : true);
  const [newsletter, setNewsletter] = useState(
    userData ? userData.newsletter : true
  );

  const [errors, setErrors] = useState<UserFormErrors>(defaultUserErrorsState);
  const [hasErrors, setHasErrors] = useState(false);

  const clearFields = (): void => {
    setName("");
    setSurname("");
    setCpf("");
  };

  const handleNameField = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ): void => {
    const value = e.target.value;
    const lettersCheck = charactersCheck(value);
    let nameError: UserErrorProps = { isValid: true, message: "" };

    if (!lettersCheck) {
      nameError = {
        isValid: false,
        message: "Preencha este campo corretamente",
      };
    }

    setErrors({ ...errors, name: nameError });
  };

  const handleCPFField = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ): void => {
    const isValidCPF = isCPF(e.target.value);
    let cpfError: UserErrorProps = { isValid: true, message: "" };
    if (!isValidCPF) {
      cpfError = {
        isValid: false,
        message: "CPF incorreto, verifique os dados.",
      };
    }
    setErrors({ ...errors, cpf: cpfError });
  };

  const handleSurnameField = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ): void => {
    const value = e.target.value;
    const lettersCheck = charactersCheck(value);
    let surnameError: UserErrorProps = { isValid: true, message: "" };

    if (!lettersCheck) {
      surnameError = {
        isValid: false,
        message: "Preencha este campo corretamente",
      };
    }

    setErrors({ ...errors, surname: surnameError });
  };

  const handleErrorModal = (): void => {
    setHasErrors(!hasErrors);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const findError = Object.values(errors).find(
      (error) => error.isValid === false
    );
    if (!!findError) {
      handleErrorModal();
      return;
    }

    const data = {
      name,
      surname,
      cpf: cpf.replace(/\D/g, ""),
      id: userData ? userData.id : uuidV4(),
      sales,
      newsletter,
    };
    onSubmitForm(data);
    clearFields();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="name"
        value={name}
        onChange={({ target }) => {
          const tmpName = target.value;
          setName(tmpName);
        }}
        error={!errors.name.isValid}
        helperText={errors.name.message}
        onBlur={handleNameField}
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
        id="surname"
        label="Sobrenome"
        variant="outlined"
        value={surname}
        onChange={({ target }) => {
          const tmpSurname = target.value;
          setSurname(tmpSurname);
        }}
        onBlur={handleSurnameField}
        helperText={errors.surname.message}
        error={!errors.surname.isValid}
        fullWidth
        margin="normal"
      />

      <TextField
        id="cpf"
        label="CPF"
        value={cpf}
        error={!errors.cpf.isValid}
        helperText={errors.cpf.message}
        onChange={({ target }) => {
          const tmpCpf = formatToCPF(target.value);
          setCpf(tmpCpf);
        }}
        onBlur={handleCPFField}
        variant="outlined"
        fullWidth
        margin="normal"
        inputProps={{ maxLength: 14 }}
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
        {userData ? "Editar" : "Cadastrar"}
      </Button>

      <Snackbar
        open={hasErrors}
        autoHideDuration={6000}
        onClose={handleErrorModal}
      >
        <Alert
          severity="error"
          sx={{ width: "100%" }}
          variant="filled"
          onClose={handleErrorModal}
        >
          Verifique os errors para prosseguir!
        </Alert>
      </Snackbar>
    </form>
  );
};

export default SignupForm;
