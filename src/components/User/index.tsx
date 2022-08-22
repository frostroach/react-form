import React from "react";
import { UserStyled as Styled } from "./styled";

import { Typography } from "@mui/material";
import { Edit as EditIcon, Remove as RemoveIcon } from "@mui/icons-material";

import { User as UserModel } from "../../models/user";

type UserProps = {
  data: UserModel;
  onPressDelete: (id: string) => void;
  //onPressEdit: (id: string) => void;
};

const User: React.FC<UserProps> = ({ data, onPressDelete }) => {
  return (
    <Styled.UserContainer maxWidth="sm">
      <Styled.UserWrapper>
        <Typography variant="subtitle1" component="h3">
          Nome: {data.name} {data.surname}
        </Typography>
        <Styled.ButtonsWrapper>
          {/* <Styled.UserButton
            color="success"
            variant="contained"
            onClick={() => onPressEdit(data.id)}
          >
            <EditIcon sx={{ color: "#fff" }} />
          </Styled.UserButton> */}
          <div />
          <Styled.UserButton
            color="error"
            variant="contained"
            onClick={() => onPressDelete(data.id)}
          >
            <RemoveIcon sx={{ color: "#fff" }} />
          </Styled.UserButton>
        </Styled.ButtonsWrapper>
      </Styled.UserWrapper>
    </Styled.UserContainer>
  );
};

export default User;
