import React from "react";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { MasterContainer, ModalBox } from "./small.modal.styles";

const SmallModal = ({
  modalBodyContent,
  setDisplayModal,
  setModalConfirmation,
}) => {
  return (
    <MasterContainer>
      <ModalBox>
        <FontAwesomeIcon
          icon={faTimes}
          className="close-small-modal"
          onClick={() => setDisplayModal(false)}
        />
        <h4>{modalBodyContent}</h4>
        <div>
          <span
            onClick={() => {
              setDisplayModal(false);
              setModalConfirmation(true);
            }}
          >
            Yes
          </span>
          <span
            onClick={() => {
              setDisplayModal(false);
            }}
          >
            No
          </span>
        </div>
      </ModalBox>
    </MasterContainer>
  );
};

export default SmallModal;
