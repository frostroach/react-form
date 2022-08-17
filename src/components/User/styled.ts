import { Box, Container } from "@mui/material";
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
  width: 30%;
  display: flex;
  justify-content: space-between;
`;

export const UserStyled = { ButtonsWrapper, UserContainer, UserWrapper };
