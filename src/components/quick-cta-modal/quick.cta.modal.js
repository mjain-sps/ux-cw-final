import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { MasterContainer, ModalImageContainer } from "./quick.cta.styles";

const QuickActionCTAModal = ({
  quickActionCTAImage,
  setQuickActionCTAModalClose,
  setQuickActionCTAImage,
}) => {
  return (
    <MasterContainer>
      <FontAwesomeIcon
        icon={faTimes}
        onClick={() => {
          setQuickActionCTAModalClose(true);
          setQuickActionCTAImage(null);
        }}
        className="close-modal"
      />
      <ModalImageContainer>
        <img src={quickActionCTAImage} />
      </ModalImageContainer>
    </MasterContainer>
  );
};

export default QuickActionCTAModal;
