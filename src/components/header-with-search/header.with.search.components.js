import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import InputComponent from "../inputcomponent/input.components";
import { Logo, MasterContainer } from "./header.search.styles";
import pecLogo from "../../assets/pec-logo.png";
import UserProfileCTAHeader from "../user-profile-cta/user.profile.cta.header";
const HeaderWithSearch = ({ searchKeyword, handleOnChange, user }) => {
  return (
    <MasterContainer>
      <Logo>
        <img src={pecLogo} />
      </Logo>
      <InputComponent
        type="search"
        name="search-input"
        value={searchKeyword}
        onChange={handleOnChange}
        placeholder="Search PECs here"
      />
      <div>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <UserProfileCTAHeader user={user} />
    </MasterContainer>
  );
};

export default HeaderWithSearch;
