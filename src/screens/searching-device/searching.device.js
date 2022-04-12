import React, { useEffect, useState } from "react";
import { MasterContainer, SearchScreenModal } from "./searching.device.styles";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
const SearchingDevice = () => {
  const [displayDevice, setDisplayDevice] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setDisplayDevice(true);
    }, [2000]);
  }, []);
  return (
    <MasterContainer>
      <div className="close-search-device-modal">
        <FontAwesomeIcon
          icon={faTimes}
          onClick={() => navigate("/choose-profile")}
        />
      </div>
      <SearchScreenModal>
        <h4>{displayDevice ? "1 Device found" : "Searching ..."}</h4>
        {displayDevice ? (
          <h6>Click on the student to activate interface</h6>
        ) : (
          ""
        )}
        {displayDevice ? (
          <p onClick={() => navigate("/student-interface")}>
            Jessica <FontAwesomeIcon icon={faUser} />
          </p>
        ) : (
          ""
        )}
      </SearchScreenModal>
    </MasterContainer>
  );
};

export default SearchingDevice;
