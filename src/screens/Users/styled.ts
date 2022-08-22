import styled from "styled-components";

import { Button, Grid } from "@mui/material";

const HeaderContainer = styled(Grid)`
  align-items: center;
  display: flex;
  flex-direction: row;
  padding: 0 1.5em;
  margin-bottom: 1em;
`;

const AddButton = styled(Button).attrs({
  sx: {
    minWidth: 0,
    padding: "4px 10px",
  },
})``;

export const UsersStyled = { AddButton, HeaderContainer };
