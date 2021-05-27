import React from "react";

import { TextWrapp } from "./styles";

const Text = ({ text, ...props }) => {
  return <TextWrapp {...props}>{text}</TextWrapp>;
};

export default Text;
