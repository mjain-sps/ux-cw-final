import React from "react";
import { MasterContainer } from "./input.styles";

const InputComponent = ({
  type,
  placeholder,
  value,
  name,
  onChange,
  disabled,
  min,
  max,
}) => {
  return (
    <MasterContainer>
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled ? true : false}
        min={min}
        max={max}
      />
    </MasterContainer>
  );
};

export default InputComponent;
