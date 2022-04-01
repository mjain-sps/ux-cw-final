import React from "react";
import MasterContainer from "./button.styles";

const ButtonComponent = ({ children, disabled, type, onClick, name }) => {
  return (
    <MasterContainer>
      <button name={name} disabled={disabled} type={type} onClick={onClick}>
        {children}
      </button>
    </MasterContainer>
  );
};

export default ButtonComponent;
