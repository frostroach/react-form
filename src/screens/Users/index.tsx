import { Container, Typography } from "@mui/material";
import React from "react";

const Users: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Usuário cadastrados
      </Typography>
    </Container>
  );
};

export default Users;
