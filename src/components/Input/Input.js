import React from "react";
import StyledInput from "./Input.styled";

const Input = ({ type, children }) => {
  return <StyledInput type={type}>{children}</StyledInput>;
};

export default Input;
