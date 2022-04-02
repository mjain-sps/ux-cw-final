import React, { useContext } from "react";
import { currentTheme } from "../../App";

import { MasterContainer, UserDropDownMenu } from "./user.profile.cta.styles";

const UserProfileCTAHeader = ({
  user,
  displayDropDown,
  setDisplayDropDown,
}) => {
  const { theme, setTheme } = useContext(currentTheme);
  return (
    <MasterContainer onClick={() => setDisplayDropDown(!displayDropDown)}>
      <img src={user.displayPic} />
      {displayDropDown ? (
        <UserDropDownMenu>
          <ul>
            <li>Add Profile</li>
            <li onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
              Dark Theme
            </li>
            <li>Logout</li>
          </ul>
        </UserDropDownMenu>
      ) : (
        ""
      )}
    </MasterContainer>
  );
};

export default UserProfileCTAHeader;
