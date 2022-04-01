import React from "react";
import { MasterContainer } from "./fav.pecs.bar.styles";
const FavouritePecsDisplayBar = ({ favouritePecs }) => {
  return (
    <>
      <MasterContainer>
        {favouritePecs.map((favPec, index) => {
          return <img key={index} src={favPec.picture} />;
        })}
      </MasterContainer>
    </>
  );
};

export default FavouritePecsDisplayBar;
