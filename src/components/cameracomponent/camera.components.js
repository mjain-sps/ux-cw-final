import {
  faCircleCheck,
  faTimes,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import SmallModal from "../SmallModalComponent/small.modal";
import {
  AcceptImageIconWrapper,
  CameraActionPanel,
  CameraButtonContainer,
  CameraInnerButton,
  CameraOuterBorder,
  DeleteImageIconWrapper,
  ImagePreview,
  ImagePreviewCTAPanel,
  MasterContainer,
} from "./camera.styles";

const CameraComponent = ({ setCameraToggle, imgFile, setPictureAccepted }) => {
  const [pictureClicked, setPictureClicked] = useState(false);
  const [imagePreviewModeOn, setImagePreviewModeOn] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);
  const [modalConfirmation, setModalConfirmation] = useState(false);

  useEffect(() => {
    if (modalConfirmation) {
      setCameraToggle(false);
    }
  }, [modalConfirmation]);
  return (
    <>
      <MasterContainer>
        <img src={imgFile} className={pictureClicked ? "picture-click" : ""} />
        <FontAwesomeIcon
          icon={faTimes}
          className="close-camera"
          onClick={() => setCameraToggle(false)}
        />

        {imagePreviewModeOn ? (
          <ImagePreviewCTAPanel>
            <DeleteImageIconWrapper>
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => {
                  setDisplayModal(true);
                }}
              />
            </DeleteImageIconWrapper>
            <AcceptImageIconWrapper>
              <FontAwesomeIcon
                icon={faCircleCheck}
                onClick={() => {
                  setPictureAccepted(true);
                  setCameraToggle(false);
                }}
              />
            </AcceptImageIconWrapper>
          </ImagePreviewCTAPanel>
        ) : (
          <CameraActionPanel>
            <CameraInnerButton onClick={() => setPictureClicked(true)} />
          </CameraActionPanel>
        )}
        {pictureClicked && !imagePreviewModeOn ? (
          <ImagePreview onClick={() => setImagePreviewModeOn(true)}>
            <img src={imgFile} />
          </ImagePreview>
        ) : (
          ""
        )}
      </MasterContainer>
      {displayModal ? (
        <SmallModal
          modalBodyContent="Are you sure ?"
          setModalConfirmation={setModalConfirmation}
          setDisplayModal={setDisplayModal}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default CameraComponent;
