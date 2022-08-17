export type User = {
  name: string;
  surname: string;
  cpf: string;
  id: string;
  sales: boolean;
  newsletter: boolean;
};

export type UserForm = {
  name: string;
  surname: string;
  cpf: string;
  sales: boolean;
  newsletter: boolean;
};

export type UserErrorProps = {
  isValid: boolean;
  message: string;
};

export type UserFormErrors = {
  cpf: UserErrorProps;
  name: UserErrorProps;
  surname: UserErrorProps;
};
