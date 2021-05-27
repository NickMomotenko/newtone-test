import React from "react";

import { ButtonWrapp } from "./styles";

const Button = ({ text, onClick, ...props }) => {
  return (
    <ButtonWrapp onClick={onClick} {...props}>
      {text}
    </ButtonWrapp>
  );
};

export default Button;
