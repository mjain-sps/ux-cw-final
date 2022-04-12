import React from "react";
import { MasterContainer } from "./toast.component.styles";

const ToastComponent = ({ message, role }) => {
  return (
    <MasterContainer
      style={{ background: role === "SUCCESS" ? "#47d7ac" : "#ff6600" }}
    >
      <p style={{ color: role === "SUCCESS" ? "#000000" : "#ffffff" }}>
        {message}
      </p>
    </MasterContainer>
  );
};

export default ToastComponent;
