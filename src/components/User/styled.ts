import { Box, Button, Container } from "@mui/material";
import styled from "styled-components";

const UserContainer = styled(Container)``;

const UserWrapper = styled(Box)`
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1em;
  margin-bottom: 1em;
  display: flex;
  justify-content: space-between;
`;

const ButtonsWrapper = styled(Box)`
  width: 25%;
  display: flex;
  justify-content: space-between;
`;

const UserButton = styled(Button).attrs({
  sx: {
    minWidth: 0,
    padding: "3px 10px",
  },
})``;

export const UserStyled = {
  ButtonsWrapper,
  UserButton,
  UserContainer,
  UserWrapper,
};
