import {
  faEdit,
  faHeart,
  faPlay,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../../components/spinnercomponent/spinner.styles";
import { pecsData } from "../../data/pecs.data";
import {
  AddToFavs,
  FooterSection,
  MasterContainer,
  PecEdit,
  SoundPlay,
} from "./pec.details.styles";

import useSound from "use-sound";
import teddySound from "../../assets/sounds/teddy-audio.m4a";
import lollySound from "../../assets/sounds/lolly-sound.m4a";
import milkSound from "../../assets/sounds/milk-sound.m4a";

const PecDetailsScreen = () => {
  const [pec, setPec] = useState(null);
  const [playMilk] = useSound(milkSound);
  const [playTeddy] = useSound(teddySound);
  const [playLolly] = useSound(lollySound);

  const { id } = useParams();
  useEffect(() => {
    if (id) {
      const pecFound = pecsData.find((pec) => pec._id === id);
      if (pecFound) {
        setPec(pecFound);
      }
    }
  }, [id]);

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
  return (
    <>
      {pec ? (
        <>
          <MasterContainer>
            <h1>{pec.name}</h1>
            <img src={pec.picture} />

            <FooterSection>
              <PecEdit>
                <FontAwesomeIcon icon={faTrash} />
                <FontAwesomeIcon icon={faEdit} />
              </PecEdit>
              <SoundPlay>
                <button onClick={handleSoundPlay}>
                  <FontAwesomeIcon icon={faPlay} />
                </button>
              </SoundPlay>
              <AddToFavs>
                <FontAwesomeIcon icon={faHeart} />
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
