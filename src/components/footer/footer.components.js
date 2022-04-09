import {
  faCamera,
  faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import React from "react";
import CameraComponent from "../cameracomponent/camera.components";
import {
  AddPecContainer,
  BackButtonContainer,
  ChooseProfileContainer,
  MasterContainer,
} from "./footer.styles";
import { studentProfileData } from "../../data/student.profile.data";
const FooterComponent = ({
  cameraToggle,
  setCameraToggle,
  imgFile,
  setPictureAccepted,
  location,
  fullName,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <MasterContainer>
        <BackButtonContainer
          onClick={() =>
            navigate(
              location.state?.from?.pathname
                ? location.state.from.pathname
                : "/choose-profile"
            )
          }
        >
          <FontAwesomeIcon icon={faChevronCircleLeft} />
        </BackButtonContainer>
        <ChooseProfileContainer>
          {studentProfileData.length ? (
            <select
              onChange={(e) =>
                navigate(`/pec-display/${e.target.value}`, {
                  state: { from: location },
                })
              }
              defaultValue={fullName}
            >
              {studentProfileData.map((student, index) => {
                return (
                  <option key={student.index} value={student.fullName}>
                    {student.fullName}
                  </option>
                );
              })}
            </select>
          ) : (
            ""
          )}
        </ChooseProfileContainer>
        <AddPecContainer>
          <FontAwesomeIcon
            icon={faCamera}
            onClick={() => setCameraToggle(true)}
          />
        </AddPecContainer>
      </MasterContainer>
      {cameraToggle ? (
        <CameraComponent
          setCameraToggle={setCameraToggle}
          imgFile={imgFile}
          setPictureAccepted={setPictureAccepted}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default FooterComponent;
