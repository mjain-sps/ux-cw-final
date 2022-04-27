import {
  faChevronLeft,
  faEdit,
  faHeart,
  faPlay,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Spinner } from "../../components/spinnercomponent/spinner.styles";
import { pecsData } from "../../data/pecs.data";
import {
  AddToFavs,
  BackButtonWrapper,
  FooterSection,
  MasterContainer,
  PecEdit,
  SoundPlay,
} from "./pec.details.styles";
import { studentProfileData } from "../../data/student.profile.data";

import useSound from "use-sound";
import teddySound from "../../assets/sounds/teddy-audio.m4a";
import lollySound from "../../assets/sounds/lolly-sound.m4a";
import milkSound from "../../assets/sounds/milk-sound.m4a";
import SmallModal from "../../components/SmallModalComponent/small.modal";

const PecDetailsScreen = () => {
  const [pec, setPec] = useState(null);
  const [inFavourites, setInFavourites] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);
  const [modalConfirmation, setModalConfirmation] = useState(false);

  const [playMilk] = useSound(milkSound);
  const [playTeddy] = useSound(teddySound);
  const [playLolly] = useSound(lollySound);

  const { id, fullName } = useParams();
  useEffect(() => {
    if (id && fullName) {
      const pecFound = pecsData.find((pec) => pec._id === id);
      if (pecFound) {
        setPec(pecFound);
        const studentFound = studentProfileData.find(
          (st) => st.fullName === fullName
        );
        if (studentFound) {
          const checkIfFavExists = studentFound.favouritePecs.find(
            (favPec) => favPec === pecFound._id
          );
          if (checkIfFavExists) {
            setInFavourites(true);
          }
        }
      }
    }
  }, [id]);

  const navigate = useNavigate();
  const location = useLocation();
  const handleSoundPlay = (e) => {
    e.preventDefault();
    if (pec._id === "pec_1") {
      playTeddy();
    } else if (pec._id === "pec_2") {
      playMilk();
    } else if (pec._id === "pec_3") {
      playLolly();
    }
  };

  const handleAddToFavs = () => {
    setInFavourites(!inFavourites);
    const studentFound = studentProfileData.find(
      (st) => st.fullName === fullName
    );
    if (studentFound) {
      if (!studentFound.favouritePecs.find((fav) => fav === pec._id)) {
        studentFound.favouritePecs.push(pec._id);
      } else {
        studentFound.favouritePecs = studentFound.favouritePecs.filter(
          (fav) => fav !== pec._id
        );
      }
    }
  };

  useEffect(() => {
    if (modalConfirmation) {
      const indexFound = pecsData.findIndex((st) => st._id === pec._id);
      pecsData.splice(indexFound, 1);
      navigate(location.state.from.pathname, { replace: true });
    }
  }, [modalConfirmation]);
  console.log(location);
  return (
    <>
      {pec ? (
        <>
          <MasterContainer>
            {/* <FontAwesomeIcon
              icon={faTrash}
              className="delete-pec-cta"
              onClick={() => setDisplayModal(true)}
            /> */}
            <h4>{pec.name}</h4>
            <h6>{pec.category}</h6>
            <img src={pec.picture} />

            <FooterSection>
              <BackButtonWrapper>
                <span className="back-button">
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    onClick={() => navigate(`/pec-display/${fullName}`)}
                  />
                </span>
              </BackButtonWrapper>
              <PecEdit
                onClick={() =>
                  navigate(`/edit-pec/${pec._id}/${fullName}`, {
                    state: { from: location },
                  })
                }
              >
                Edit
                <FontAwesomeIcon icon={faEdit} style={{ marginLeft: "10px" }} />
              </PecEdit>
              <SoundPlay>
                <button onClick={handleSoundPlay}>
                  <FontAwesomeIcon icon={faPlay} />
                </button>
              </SoundPlay>
              <AddToFavs>
                <FontAwesomeIcon
                  icon={faHeart}
                  onClick={() => handleAddToFavs()}
                  className={inFavourites ? "fav-pec" : ""}
                />
              </AddToFavs>
            </FooterSection>
          </MasterContainer>
          {displayModal ? (
            <SmallModal
              modalBodyContent="Are you sure?"
              setDisplayModal={setDisplayModal}
              setModalConfirmation={setModalConfirmation}
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

export default PecDetailsScreen;
