import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { studentProfileData } from "../../data/student.profile.data";
import { MasterContainer, ProfileCards } from "./choose.profile.styles";

const ChooseStudentProfile = () => {
  const navigate = useNavigate();
  return (
    <>
      <Link to="/add-profile">Add Profile</Link>
      {studentProfileData.length ? (
        <MasterContainer>
          {studentProfileData.map((profile, index) => {
            return (
              <ProfileCards
                key={index}
                onClick={() => navigate(`/pec-display/${profile.fullName}`)}
              >
                <img src={profile.displayPic} />
                <div>
                  <p>{profile.fullName}</p>
                  <p>{profile.pecLevel}</p>
                </div>
              </ProfileCards>
            );
          })}
        </MasterContainer>
      ) : (
        <>
          <h6>No Student Profile found</h6>
        </>
      )}
    </>
  );
};

export default ChooseStudentProfile;
