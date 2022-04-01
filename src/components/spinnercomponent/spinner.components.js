import React from "react";

import { Spinner, SpinnerBackDrop } from "./spinner.styles";
const SpinnerComponent = () => {
  return (
    <SpinnerBackDrop>
      <Spinner />
    </SpinnerBackDrop>
  );
};

export default SpinnerComponent;
