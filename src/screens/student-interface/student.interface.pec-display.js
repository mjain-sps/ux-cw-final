import React, { useEffect, useState } from "react";
import InputComponent from "../../components/inputcomponent/input.components";
import { Spinner } from "../../components/spinnercomponent/spinner.styles";
import { studentProfileData } from "../../data/student.profile.data";
import { pecsData } from "../../data/pecs.data";
import {
  FavouritesPanel,
  HeaderContainer,
  MainPanel,
  MasterContainer,
  MasterContainerPecLevel1,
  PecDisplayCard,
  QuickActionPanel,
  TitleContainer,
} from "./student.interface.styles";
import breakCTAImage from "../../assets/cta/break-image.jpg";
import helpCta from "../../assets/cta/help--pec.jpg";
import noPec from "../../assets/cta/no--pec__card.PNG";
import yesPec from "../../assets/cta/yes--pec--card.PNG";
import QuickActionCTAModal from "../../components/quick-cta-modal/quick.cta.modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const StudentInterfacePecDisplayPage = () => {
  const [profileData, setProfileData] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [quickActionCTAImage, setQuickActionCTAImage] = useState(null);
  const [quickActionCTAModal, setQuickActionCTAModalClose] = useState(false);

  const [pecs, setPecs] = useState([]);
  const [favPecs, setFavPecs] = useState([]);

  useEffect(() => {
    setProfileData(studentProfileData[0]);
    const pecsArray = [];
    const favPecsArray = [];
    studentProfileData[0].pecsAssociated.forEach((pec) => {
      const matchFound = pecsData.find((p) => p._id === pec);
      pecsArray.push(matchFound);
    });
    studentProfileData[0].favouritePecs.forEach((pec) => {
      const matchFound = pecsData.find((p) => p._id === pec);
      favPecsArray.push(matchFound);
    });
    setPecs([...pecsArray]);
    setFavPecs([...favPecsArray]);
  }, []);
  console.log(pecs);
  return (
    <>
      {profileData ? (
        <>
          <MasterContainer>
            <HeaderContainer>
              <InputComponent
                type="text"
                placeholder="Search PEC here"
                value={searchKeyword}
                name=""
                onChange={(e) => setSearchKeyword(e.target.value)}
                disabled={false}
              />
              <div className="search-icon">
                <span>Search</span>
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </HeaderContainer>

            <TitleContainer>
              <h4>Quick CTA Panel</h4>
            </TitleContainer>
            <QuickActionPanel>
              <MasterContainerPecLevel1>
                <img
                  src={breakCTAImage}
                  onClick={() => setQuickActionCTAImage(breakCTAImage)}
                />
                <img
                  src={yesPec}
                  onClick={() => setQuickActionCTAImage(yesPec)}
                />
                <img
                  src={noPec}
                  onClick={() => setQuickActionCTAImage(noPec)}
                />
                <img
                  src={helpCta}
                  onClick={() => setQuickActionCTAImage(helpCta)}
                />
              </MasterContainerPecLevel1>
            </QuickActionPanel>

            <TitleContainer>
              <h4>Favourite PECS</h4>
            </TitleContainer>
            <FavouritesPanel>
              {favPecs.length ? (
                favPecs.map((pec) => {
                  return (
                    <PecDisplayCard>
                      <h4>{pec.category}</h4>
                      <img
                        src={pec.picture}
                        alt={`name is ${pec.name} and category is ${pec.category}`}
                        onClick={() => setQuickActionCTAImage(pec.picture)}
                      />
                      <p>{pec.name}</p>
                    </PecDisplayCard>
                  );
                })
              ) : (
                <h5>No Favourite PECS</h5>
              )}
            </FavouritesPanel>

            <TitleContainer>
              <h4>All PECS</h4>
            </TitleContainer>
            <MainPanel>
              {pecs.length ? (
                pecs.map((pec) => {
                  return (
                    <PecDisplayCard id={pec._id}>
                      <h4>{pec.category}</h4>
                      <img
                        src={pec.picture}
                        alt={`name is ${pec.name} and category is ${pec.category}`}
                        onClick={() => setQuickActionCTAImage(pec.picture)}
                      />
                      <p>{pec.name}</p>
                    </PecDisplayCard>
                  );
                })
              ) : (
                <h3>No PECS found</h3>
              )}
            </MainPanel>
          </MasterContainer>
          {quickActionCTAImage ? (
            <QuickActionCTAModal
              setQuickActionCTAModalClose={setQuickActionCTAModalClose}
              quickActionCTAImage={quickActionCTAImage}
              setQuickActionCTAImage={setQuickActionCTAImage}
            />
          ) : (
            ""
          )}
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default StudentInterfacePecDisplayPage;
