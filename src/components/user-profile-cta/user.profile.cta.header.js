import React from "react";
import { MasterContainer } from "./user.profile.cta.styles";

const UserProfileCTAHeader = ({ user }) => {
  return (
    <MasterContainer>
      <img src={user.displayPic} />
    </MasterContainer>
  );
};

export default UserProfileCTAHeader;
