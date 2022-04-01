import React from "react";
import { MasterHeader } from "./static.header.styles";
import pecLogo from "../../assets/pecs-logo.png";
const StaticHeader = () => {
  return (
    <>
      <MasterHeader>
        <img src={pecLogo} alt="pec-logo" />
        <h4>Welcome to ePEC Solutions</h4>
      </MasterHeader>
    </>
  );
};

export default StaticHeader;
