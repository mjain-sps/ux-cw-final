import React, { useContext } from "react";
import { currentLanguage, currentTheme } from "../../App";
import { useNavigate, useParams } from "react-router-dom";

import { MasterContainer, UserDropDownMenu } from "./user.profile.cta.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const UserProfileCTAHeader = ({
  user,
  displayDropDown,
  setDisplayDropDown,
  location,
}) => {
  const { theme, setTheme, language, setLanguage } = useContext(currentTheme);

  const navigate = useNavigate();
  const { fullName } = useParams();

  return (
    <MasterContainer onClick={() => setDisplayDropDown(!displayDropDown)}>
      <img src={user.displayPic} />
      {displayDropDown ? (
        <UserDropDownMenu>
          <ul>
            <li
              onClick={() =>
                navigate("/add-profile", { state: { from: location } })
              }
            >
              Add Profile
            </li>

            {fullName ? (
              <li
                onClick={() =>
                  navigate(`/edit-profile/${fullName}`, {
                    state: { from: location },
                  })
                }
              >
                Edit {fullName} Profile
              </li>
            ) : (
              ""
            )}

            <li onClick={() => navigate("/searching-device")}>
              ON Student Interface
            </li>

            <li onClick={() => navigate("/dashboard")}>Dashboard</li>

            <li onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
              {theme === "light" ? "Dark Theme" : "Light Theme"}
            </li>
            <li
              onClick={() =>
                language === "english"
                  ? setLanguage("spanish")
                  : setLanguage("english")
              }
            >
              {language === "english"
                ? "Translate in Spanish"
                : "Translate in English"}
            </li>

            <li
              onClick={() =>
                navigate("/subscription-plan", { state: { from: location } })
              }
            >
              Subscription Details
            </li>
            <li
              onClick={() =>
                navigate("/", { replace: true, state: { from: location } })
              }
            >
              Logout
            </li>
          </ul>
        </UserDropDownMenu>
      ) : (
        ""
      )}
    </MasterContainer>
  );
};

export default UserProfileCTAHeader;
