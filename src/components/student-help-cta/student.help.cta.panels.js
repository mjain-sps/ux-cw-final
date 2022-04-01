import React from "react";
import {
  MasterContainerPecLevel1,
  MasterContainerPecLevel3,
  SectionForPecLevel3,
} from "./student.help.cta.styles";
import breakCTAImage from "../../assets/cta/break-image.jpg";
const StudentHelpCTAPanel = ({ pecLevel }) => {
  return (
    <>
      {pecLevel === 1 ? (
        <MasterContainerPecLevel1>
          <img src={breakCTAImage} />
          <img src={breakCTAImage} />
          <img src={breakCTAImage} />
        </MasterContainerPecLevel1>
      ) : pecLevel === 3 ? (
        <MasterContainerPecLevel3>
          <SectionForPecLevel3>
            <img src={breakCTAImage} />
            <img src={breakCTAImage} />
            <img src={breakCTAImage} />
          </SectionForPecLevel3>
          <SectionForPecLevel3>
            <img src={breakCTAImage} />
            <img src={breakCTAImage} />
            <img src={breakCTAImage} />
          </SectionForPecLevel3>
        </MasterContainerPecLevel3>
      ) : (
        <p>Layout for this PEC category is under progress..</p>
      )}
    </>
  );
};

export default StudentHelpCTAPanel;
