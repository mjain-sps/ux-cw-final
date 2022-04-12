import {
  faPlus,
  faRightFromBracket,
  faTable,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ToastComponent from "../../components/toast-component/toast.components";
import { studentProfileData } from "../../data/student.profile.data";
import {
  ChooseProfileWrapper,
  CTACapsule,
  MasterContainer,
  ProfileCards,
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
  console.log(location);
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
            <p>Add Profile</p>
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
