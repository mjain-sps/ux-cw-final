import React, { useContext } from "react";
import {
  MasterContainerPecLevel1,
  MasterContainerPecLevel3,
  SectionForPecLevel3,
  StudenPaneWrapper,
} from "./student.help.cta.styles";
import breakCTAImage from "../../assets/cta/break-image.jpg";
import helpCta from "../../assets/cta/help--pec.jpg";
import feelingSick from "../../assets/cta/feeling-sick--peck.jpg";
import noPec from "../../assets/cta/no--pec__card.PNG";
import happyPec from "../../assets/cta/happy--pec.jpg";
import playOutSide from "../../assets/cta/play--outside-pec.jpg";
import toiletPec from "../../assets/cta/toilet-pec--card.jpg";
import waitPec from "../../assets/cta/wait--pec.jpg";
import yesPec from "../../assets/cta/yes--pec--card.PNG";
import { currentTheme } from "../../App";

const StudentHelpCTAPanel = ({ pecLevel, setQuickActionCTAImage }) => {
  const { language } = useContext(currentTheme);
  return (
    <StudenPaneWrapper>
      <h4>
        {language === "english"
          ? "Quick Action Panel"
          : "Panel de llamada a la acción rápida"}
      </h4>
      {pecLevel === 1 ? (
        <MasterContainerPecLevel1>
          <img
            src={breakCTAImage}
            onClick={() => setQuickActionCTAImage(breakCTAImage)}
          />
          <img src={yesPec} onClick={() => setQuickActionCTAImage(yesPec)} />
          <img src={noPec} onClick={() => setQuickActionCTAImage(noPec)} />
          <img src={helpCta} onClick={() => setQuickActionCTAImage(helpCta)} />
        </MasterContainerPecLevel1>
      ) : pecLevel === 3 ? (
        <MasterContainerPecLevel3>
          <SectionForPecLevel3>
            <img
              src={breakCTAImage}
              onClick={() => setQuickActionCTAImage(breakCTAImage)}
            />
            <img src={yesPec} onClick={() => setQuickActionCTAImage(yesPec)} />
            <img src={noPec} onClick={() => setQuickActionCTAImage(noPec)} />
            <img
              src={helpCta}
              onClick={() => setQuickActionCTAImage(helpCta)}
            />
          </SectionForPecLevel3>
          <SectionForPecLevel3>
            <img
              src={feelingSick}
              onClick={() => setQuickActionCTAImage(feelingSick)}
            />
            <img
              src={happyPec}
              onClick={() => setQuickActionCTAImage(happyPec)}
            />
            <img
              src={playOutSide}
              onClick={() => setQuickActionCTAImage(playOutSide)}
            />
            <img
              src={toiletPec}
              onClick={() => setQuickActionCTAImage(toiletPec)}
            />
          </SectionForPecLevel3>
        </MasterContainerPecLevel3>
      ) : (
        <p>Layout for this PEC category is under progress..</p>
      )}
    </StudenPaneWrapper>
  );
};

export default StudentHelpCTAPanel;
