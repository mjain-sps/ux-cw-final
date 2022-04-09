import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import { studentProfileData } from "../../data/student.profile.data";
import { pecsData } from "../../data/pecs.data";
import {
  AdminPanelInfoCard,
  BackButtonWrapper,
  MasterContainer,
} from "./admin.panel.styles";

const AdminPanel = () => {
  const navigate = useNavigate();
  return (
    <MasterContainer>
      <BackButtonWrapper
        onClick={() => navigate("/choose-profile", { replace: true })}
      >
        <FontAwesomeIcon icon={faChevronLeft} className="go-back" />
      </BackButtonWrapper>
      <AdminPanelInfoCard>
        <h4>Total Students</h4>
        <p>{studentProfileData.length}</p>
      </AdminPanelInfoCard>

      <AdminPanelInfoCard>
        <h4>Total PECS</h4>
        <p>{pecsData.length}</p>
      </AdminPanelInfoCard>
    </MasterContainer>
  );
};

export default AdminPanel;
