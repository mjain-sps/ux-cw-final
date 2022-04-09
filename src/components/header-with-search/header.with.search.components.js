import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import InputComponent from "../inputcomponent/input.components";
import { Logo, MasterContainer } from "./header.search.styles";
import pecLogo from "../../assets/pec-logo.png";
import UserProfileCTAHeader from "../user-profile-cta/user.profile.cta.header";
import { currentTheme } from "../../App";
const HeaderWithSearch = ({ searchKeyword, handleOnChange, user }) => {
  const [displayDropDown, setDisplayDropDown] = useState(false);
  const location = useLocation();
  const { language } = useContext(currentTheme);
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
        placeholder={
          language === "english" ? "Search PECs here" : "Buscar PEC aquí"
        }
      />
      <div>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <UserProfileCTAHeader
        user={user}
        displayDropDown={displayDropDown}
        setDisplayDropDown={setDisplayDropDown}
        location={location}
      />
    </MasterContainer>
  );
};

export default HeaderWithSearch;
