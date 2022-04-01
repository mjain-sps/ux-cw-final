import React from "react";
import { MasterContainer } from "./input.styles";

const InputComponent = ({ type, placeholder, value, name, onChange }) => {
  return (
    <MasterContainer>
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
    </MasterContainer>
  );
};

export default InputComponent;
