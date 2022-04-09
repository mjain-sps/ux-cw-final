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

const PecDetailsScreen = () => {
  const [pec, setPec] = useState(null);
  const [inFavourites, setInFavourites] = useState(false);
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
        console.log(studentFound);
      } else {
        studentFound.favouritePecs = studentFound.favouritePecs.filter(
          (fav) => fav !== pec._id
        );
      }
    }
  };
  console.log(pec);
  return (
    <>
      {pec ? (
        <>
          <MasterContainer>
            <FontAwesomeIcon icon={faTrash} className="delete-pec-cta" />
            <h4>{pec.name}</h4>
            <h6>{pec.category}</h6>
            <img src={pec.picture} />

            <FooterSection>
              <BackButtonWrapper>
                <span className="back-button">
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    onClick={() => navigate(location.state.from.pathname)}
                  />
                </span>
              </BackButtonWrapper>
              <PecEdit>
                <FontAwesomeIcon
                  icon={faEdit}
                  onClick={() =>
                    navigate(`/edit-pec/${pec._id}/${fullName}`, {
                      state: { from: location },
                    })
                  }
                />
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
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default PecDetailsScreen;
