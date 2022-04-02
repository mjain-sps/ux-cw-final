import {
  faPlus,
  faRightFromBracket,
  faTable,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { studentProfileData } from "../../data/student.profile.data";
import {
  ChooseProfileWrapper,
  CTACapsule,
  MasterContainer,
  ProfileCards,
  TopCTAPanel,
} from "./choose.profile.styles";

const ChooseStudentProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
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
            navigate("/add-profile", { state: { from: location } })
          }
        >
          <FontAwesomeIcon icon={faTable} />
          <p>Dashboard</p>
        </CTACapsule>

        <CTACapsule
          onClick={() =>
            navigate("/add-profile", { state: { from: location } })
          }
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
  );
};

export default ChooseStudentProfile;
