import React from "react";
import { Typography, Button } from "@mui/material";
import { UserStyled as Styled } from "./styled";
import { Edit as EditIcon, Remove as RemoveIcon } from "@mui/icons-material";
import { User as UserModel } from "../../models/user";

type UserProps = {
  data: UserModel;
  onPressDelete: (id: string) => void;
  onPressEdit: (id: string) => void;
};

const User: React.FC<UserProps> = ({ data, onPressDelete, onPressEdit }) => {
  return (
    <Styled.UserContainer maxWidth="sm">
      <Styled.UserWrapper>
        <Typography variant="subtitle1" component="h3">
          Nome: {data.name} {data.surname}
        </Typography>
        <Styled.ButtonsWrapper>
          <Button
            color="success"
            variant="contained"
            onClick={() => onPressEdit(data.id)}
          >
            <EditIcon sx={{ color: "#ccc" }} />
          </Button>
          <Button
            color="error"
            variant="contained"
            onClick={() => onPressDelete(data.id)}
          >
            <RemoveIcon sx={{ color: "#ccc" }} />
          </Button>
        </Styled.ButtonsWrapper>
      </Styled.UserWrapper>
    </Styled.UserContainer>
  );
};

export default User;
