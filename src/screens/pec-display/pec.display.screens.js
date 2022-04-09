import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import HeaderWithSearch from "../../components/header-with-search/header.with.search.components";
import StudentHelpCTAPanel from "../../components/student-help-cta/student.help.cta.panels";
import { registeredUser } from "../../data/user.data";
import { studentProfileData } from "../../data/student.profile.data";
import { pecsData } from "../../data/pecs.data";
import { Spinner } from "../../components/spinnercomponent/spinner.styles";
import FavouritePecsDisplayBar from "../../components/favourite-pec-bar/fav.pecs.display.bar";
import {
  InteractiveModeWrapper,
  IWantPecWrapper,
  MainPecsDisplaySection,
  MasterContainer,
  PecDisplayCard,
  PecDisplayCardInteractive,
  PecDisplayPanelHeader,
  PlayInteractiveTrainWrapper,
} from "./pec.display.styles";
import FooterComponent from "../../components/footer/footer.components";
import applePicture from "../../assets/pecs/fruits/apple.jpeg";
import iWantPec from "../../assets/pecs/i_want.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faTimes } from "@fortawesome/free-solid-svg-icons";
import useSound from "use-sound";
import iWantTeddyBear from "../../assets/sounds/i_want_teddy_bear.m4a";
import iWantLollypop from "../../assets/sounds/i_want_lollypop.m4a";
import iWantTeddyAndLollypop from "../../assets/sounds/teddy_and_lollipop.m4a";
import iWantLollyAndTeddy from "../../assets/sounds/lollipop_and_teddy_bear.m4a";
import invalidSelection from "../../assets/sounds/invalid.m4a";
import QuickActionCTAModal from "../../components/quick-cta-modal/quick.cta.modal";
import { currentTheme } from "../../App";

const PecDisplayScreen = () => {
  const { language } = useContext(currentTheme);
  const { fullName } = useParams();

  const [searchKeyword, setSearchKeyword] = useState("");
  const [choosenStudentProfile, setChosenStudentProfile] = useState(null);
  const [associatedPecsData, setAssociatedPecsData] = useState([]);
  const [favouritePecs, setFavouritePecs] = useState([]);
  const [cameraToggle, setCameraToggle] = useState(false);
  const [pictureAccepted, setPictureAccepted] = useState(false);
  const [droppedCards, setDroppedCards] = useState([]);
  const [quickActionCTAModal, setQuickActionCTAModalClose] = useState(false);
  const [quickActionCTAImage, setQuickActionCTAImage] = useState(null);

  const [playOnlyTeddy] = useSound(iWantTeddyBear);
  const [playOnlyLollypop] = useSound(iWantLollypop);
  const [playTeddyAndLolly] = useSound(iWantTeddyAndLollypop);
  const [playLollyAndTeddy] = useSound(iWantLollyAndTeddy);
  const [playInvalid] = useSound(invalidSelection);

  const navigate = useNavigate();
  const handleOnChange = (e) => {
    setSearchKeyword(e.target.value);
  };
  useEffect(() => {
    const studenChosen = studentProfileData.find(
      (profile) => profile.fullName === fullName
    );
    if (studenChosen.pecsAssociated) {
      const associatedPecs = studenChosen.pecsAssociated.map((pecAssiciated) =>
        pecsData.find((pec) => pec._id === pecAssiciated)
      );
      setAssociatedPecsData(associatedPecs);
    }
    if (studenChosen.favouritePecs) {
      const favPecs = studenChosen.favouritePecs.map((pecAssiciated) =>
        pecsData.find((pec) => pec._id === pecAssiciated)
      );

      setFavouritePecs(favPecs);
    }

    setChosenStudentProfile(studenChosen);
  }, [fullName]);

  useEffect(() => {
    if (pictureAccepted) {
      navigate(`/add-new-pec/${fullName}`);
    }
  }, [pictureAccepted]);

  const location = useLocation();
  const drag = (e) => {
    e.dataTransfer.setData("text", e.target.id);
  };
  const drop = (e) => {
    const data = e.dataTransfer.getData("text");
    const pecFound = pecsData.find((pec) => pec._id === data);
    if (pecFound) {
      setDroppedCards([...droppedCards, pecFound]);
    }
  };
  const allowDrop = (e) => {
    e.preventDefault();
  };

  const handleInteractiveTrainSoundPlay = () => {
    if (droppedCards.length == 1) {
      if (droppedCards[0].name === "Teddy Bear") {
        console.log("entered here");
        playOnlyTeddy();
      } else {
        playOnlyLollypop();
      }
    } else if ((droppedCards.length = 2)) {
      if (
        droppedCards[0].name === "Teddy Bear" &&
        droppedCards[1].name === "lollies"
      ) {
        playTeddyAndLolly();
      } else if (
        droppedCards[0].name === "lollies" &&
        droppedCards[1].name === "Teddy Bear"
      ) {
        playLollyAndTeddy();
      } else {
        playInvalid();
      }
    } else if (droppedCards.length > 2) {
      playInvalid();
    }
  };
  return (
    <>
      {choosenStudentProfile ? (
        <MasterContainer>
          <HeaderWithSearch
            handleOnChange={handleOnChange}
            searchKeyword={searchKeyword}
            user={registeredUser[0]}
          />

          <StudentHelpCTAPanel
            pecLevel={choosenStudentProfile.pecLevel}
            setQuickActionCTAImage={setQuickActionCTAImage}
          />

          {favouritePecs.length ? (
            <FavouritePecsDisplayBar
              favouritePecs={favouritePecs}
              setQuickActionCTAImage={setQuickActionCTAImage}
            />
          ) : (
            <h4>
              {language === "english "
                ? "No pecs in Favourites"
                : "Sin pectorales en Favoritos"}
            </h4>
          )}

          {choosenStudentProfile.pecLevel >= 3 ? (
            <InteractiveModeWrapper>
              <div
                id="div1"
                onDrop={(e) => drop(e)}
                onDragOver={(e) => allowDrop(e)}
              >
                <IWantPecWrapper>
                  <img src={iWantPec} />
                </IWantPecWrapper>
                {droppedCards.length ? (
                  droppedCards.map((card) => {
                    return (
                      <PecDisplayCardInteractive>
                        <FontAwesomeIcon
                          icon={faTimes}
                          className="close-card"
                          onClick={() =>
                            setDroppedCards(
                              droppedCards.filter((cc) => cc !== card)
                            )
                          }
                        />
                        <h4>{card.category}</h4>
                        <img src={card.picture} />
                        <p>{card.name}</p>
                      </PecDisplayCardInteractive>
                    );
                  })
                ) : (
                  <h4>
                    {language === "english"
                      ? "Drop Cards To build an interactive card train"
                      : "Drop Cards Para construir un tren de cartas interactivo"}
                  </h4>
                )}
                {/* PLAY ICON */}
                <PlayInteractiveTrainWrapper
                  style={{ opacity: droppedCards.length ? "1" : "0.4" }}
                  onClick={() => handleInteractiveTrainSoundPlay()}
                >
                  <FontAwesomeIcon icon={faPlay} className="play-icon" />
                </PlayInteractiveTrainWrapper>
              </div>
            </InteractiveModeWrapper>
          ) : (
            ""
          )}
          <PecDisplayPanelHeader>
            <h4>
              {language === "english"
                ? `PEC Level -${choosenStudentProfile.pecLevel}`
                : `Nivel PEC -${choosenStudentProfile.pecLevel}`}
            </h4>
          </PecDisplayPanelHeader>
          <MainPecsDisplaySection>
            {!searchKeyword ? (
              associatedPecsData && associatedPecsData.length ? (
                associatedPecsData.map((pec) => {
                  return (
                    <PecDisplayCard
                      id={pec._id}
                      draggable="true"
                      onDragStart={(e) => drag(e)}
                      key={pec._id}
                      onClick={() =>
                        navigate(`/pec-detail/${pec._id}/${fullName}`, {
                          state: { from: location },
                        })
                      }
                    >
                      <h4>{pec.category}</h4>
                      <img
                        src={pec.picture}
                        alt={`name is ${pec.name} and category is ${pec.category}`}
                      />
                      <p>{pec.name}</p>
                    </PecDisplayCard>
                  );
                })
              ) : (
                <h4>No PECs associated yet with this profile</h4>
              )
            ) : associatedPecsData && associatedPecsData.length ? (
              associatedPecsData.filter(
                (pec) =>
                  pec.name
                    .toLowerCase()
                    .includes(searchKeyword.toLowerCase()) ||
                  pec.category
                    .toLowerCase()
                    .includes(searchKeyword.toLowerCase())
              ).length ? (
                associatedPecsData
                  .filter(
                    (pec) =>
                      pec.name
                        .toLowerCase()
                        .includes(searchKeyword.toLowerCase()) ||
                      pec.category
                        .toLowerCase()
                        .includes(searchKeyword.toLowerCase())
                  )
                  .map((pec) => {
                    return (
                      <PecDisplayCard
                        key={pec._id}
                        onClick={() =>
                          navigate(`/pec-detail/${pec._id}`, {
                            state: { from: location },
                          })
                        }
                      >
                        <h4>{pec.category}</h4>
                        <img
                          src={pec.picture}
                          alt={`name is ${pec.name} and category is ${pec.category}`}
                        />
                        <p>{pec.name}</p>
                      </PecDisplayCard>
                    );
                  })
              ) : (
                <h4>No search results found</h4>
              )
            ) : (
              <h4>No PECs associated yet with this profile </h4>
            )}
          </MainPecsDisplaySection>
          <FooterComponent
            setCameraToggle={setCameraToggle}
            imgFile={applePicture}
            setPictureAccepted={setPictureAccepted}
            cameraToggle={cameraToggle}
            location={location}
            fullName={fullName}
          />
          {quickActionCTAImage ? (
            <QuickActionCTAModal
              setQuickActionCTAModalClose={setQuickActionCTAModalClose}
              quickActionCTAImage={quickActionCTAImage}
              setQuickActionCTAImage={setQuickActionCTAImage}
            />
          ) : (
            ""
          )}
        </MasterContainer>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default PecDisplayScreen;
