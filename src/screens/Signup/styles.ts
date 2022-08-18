import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";
import { Button, Grid } from "@mui/material";

const Link = styled(ReactLink)`
  text-decoration: none;
`;

const HeaderContainer = styled(Grid)`
  align-content: center;
  display: flex;
  flex-direction: row;
  padding: 0 1.5em;
  margin-bottom: 1em;
  justify-content: space-between;
`;

const ReturnButton = styled(Button).attrs({
  sx: {
    minWidth: 0,
    padding: "4px 10px",
  },
})``;

export const SignupStyled = { ReturnButton, HeaderContainer, Link };
