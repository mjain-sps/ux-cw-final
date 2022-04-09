import React, { useContext } from "react";
import { currentTheme } from "../../App";
import { FavPecsWrapper, MasterContainer } from "./fav.pecs.bar.styles";

const FavouritePecsDisplayBar = ({ favouritePecs, setQuickActionCTAImage }) => {
  const { language } = useContext(currentTheme);
  return (
    <FavPecsWrapper>
      <h4>{language === "english" ? "Favourite PECS" : "PECS favorito"}</h4>
      <MasterContainer>
        {favouritePecs.map((favPec, index) => {
          return (
            <img
              key={index}
              src={favPec.picture}
              onClick={() => setQuickActionCTAImage(favPec.picture)}
            />
          );
        })}
      </MasterContainer>
    </FavPecsWrapper>
  );
};

export default FavouritePecsDisplayBar;
