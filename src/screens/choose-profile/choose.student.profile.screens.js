import {
  faBrush,
  faLanguage,
  faPlus,
  faRightFromBracket,
  faTable,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { currentTheme } from "../../App";
import ToastComponent from "../../components/toast-component/toast.components";
import { studentProfileData } from "../../data/student.profile.data";
import {
  ChooseProfileWrapper,
  CTACapsule,
  CTAMiddleCapsule,
  MasterContainer,
  MiddleCTAPanel,
  ProfileCards,
  SelectStudentHeader,
  TopCTAPanel,
} from "./choose.profile.styles";

const ChooseStudentProfile = () => {
  const [displayToast, setDisplayToast] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.state?.from?.pathname === "/") {
      setDisplayToast(true);

      setTimeout(() => {
        setDisplayToast(false);
      }, 2000);
    }
  }, [location]);

  const { theme, setTheme, language, setLanguage } = useContext(currentTheme);
  return (
    <>
      {displayToast ? (
        <ToastComponent
          role="SUCCESS"
          message="You have successfully Logged in"
        />
      ) : (
        ""
      )}

      <MasterContainer>
        <TopCTAPanel>
          <CTACapsule
            onClick={() =>
              navigate("/add-profile", { state: { from: location } })
            }
          >
            <FontAwesomeIcon icon={faPlus} />
            <p>Add Student</p>
          </CTACapsule>

          <CTACapsule
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <FontAwesomeIcon icon={faBrush} />
            <p> {theme === "light" ? "Dark Theme" : "Light Theme"}</p>
          </CTACapsule>

          <CTACapsule
            onClick={() =>
              language === "english"
                ? setLanguage("spanish")
                : setLanguage("english")
            }
          >
            <FontAwesomeIcon icon={faLanguage} />
            <p> {language === "english" ? "Spanish" : "English"}</p>
          </CTACapsule>

          <CTACapsule
            onClick={() =>
              navigate("/dashboard", { state: { from: location } })
            }
          >
            <FontAwesomeIcon icon={faTable} />
            <p>Dashboard</p>
          </CTACapsule>

          <CTACapsule
            onClick={() => navigate("/", { state: { from: location } })}
          >
            <FontAwesomeIcon icon={faRightFromBracket} />
            <p>Logout</p>
          </CTACapsule>
        </TopCTAPanel>

        <SelectStudentHeader>
          <h3>Select Student</h3>
        </SelectStudentHeader>
        {studentProfileData.length ? (
          <ChooseProfileWrapper>
            {studentProfileData.map((profile, index) => {
              return (
                <ProfileCards
                  key={index}
                  onClick={() =>
                    navigate(`/pec-display/${profile.fullName}`, {
                      state: { from: location },
                    })
                  }
                >
                  <img src={profile.displayPic} />
                  <div>
                    <p>{profile.fullName}</p>

                    <span>PEC Level:{profile.pecLevel}</span>
                  </div>
                </ProfileCards>
              );
            })}
          </ChooseProfileWrapper>
        ) : (
          <>
            <h6>No Student Profile found</h6>
          </>
        )}
      </MasterContainer>
    </>
  );
};

export default ChooseStudentProfile;
