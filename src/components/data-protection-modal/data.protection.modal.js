import React from "react";
import { useNavigate } from "react-router-dom";

import {
  ConfirmationBox,
  MasterContainer,
  ModalContentContainer,
} from "./data.protection.styles";
const DataProtectionModal = ({ setTriggerDataProtection }) => {
  const navigate = useNavigate();
  return (
    <MasterContainer>
      <ModalContentContainer>
        <h3>Data Storage & Usage Consent</h3>
        <h6>As per guidelines issued by Data Protection Act 2018</h6>
        <p>The data used in application shall be:</p>
        <p>1. used fairly, lawfully and transparently</p>
        <p>2. used for specified, explicit purposes</p>
        <p>
          3. used in a way that is adequate, relevant and limited to only what
          is necessary
        </p>
        <p>4. accurate and, where necessary, kept up to date</p>
        <p>5. kept for no longer than is necessary</p>
        <p>
          6. handled in a way that ensures appropriate security, including
          protection against unlawful or unauthorised processing, access, loss,
          destruction or damage
        </p>

        <h6>Do you wish to proceed?</h6>
        <ConfirmationBox>
          <span onClick={() => setTriggerDataProtection(false)}>YES</span>
          <span onClick={() => navigate("/")}>NO</span>
        </ConfirmationBox>
      </ModalContentContainer>
    </MasterContainer>
  );
};

export default DataProtectionModal;
