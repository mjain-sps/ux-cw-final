import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import HeaderWithSearch from "../../components/header-with-search/header.with.search.components";
import StudentHelpCTAPanel from "../../components/student-help-cta/student.help.cta.panels";
import { registeredUser } from "../../data/user.data";
import { studentProfileData } from "../../data/student.profile.data";
import { pecsData } from "../../data/pecs.data";
import { Spinner } from "../../components/spinnercomponent/spinner.styles";
import FavouritePecsDisplayBar from "../../components/favourite-pec-bar/fav.pecs.display.bar";
import { MainPecsDisplaySection, PecDisplayCard } from "./pec.display.styles";

const PecDisplayScreen = () => {
  const { fullName } = useParams();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [choosenStudentProfile, setChosenStudentProfile] = useState(null);
  const [associatedPecsData, setAssociatedPecsData] = useState([]);
  const [favouritePecs, setFavouritePecs] = useState([]);

  const navigate = useNavigate();
  const handleOnChange = (e) => {
    setSearchKeyword(e.target.value);
  };
  useEffect(() => {
    const studenChosen = studentProfileData.find(
      (profile) => profile.fullName === fullName
    );
    const associatedPecs = studenChosen.pecsAssociated.map((pecAssiciated) =>
      pecsData.find((pec) => pec._id === pecAssiciated)
    );
    const favPecs = studenChosen.favouritePecs.map((pecAssiciated) =>
      pecsData.find((pec) => pec._id === pecAssiciated)
    );

    setFavouritePecs(favPecs);
    setAssociatedPecsData(associatedPecs);
    setChosenStudentProfile(studenChosen);
  }, [fullName]);

  return (
    <>
      {choosenStudentProfile && associatedPecsData && favouritePecs ? (
        <>
          <HeaderWithSearch
            handleOnChange={handleOnChange}
            searchKeyword={searchKeyword}
            user={registeredUser[0]}
          />
          <StudentHelpCTAPanel pecLevel={choosenStudentProfile.pecLevel} />
          <FavouritePecsDisplayBar favouritePecs={favouritePecs} />
          <MainPecsDisplaySection>
            {associatedPecsData.length ? (
              associatedPecsData.map((pec) => {
                return (
                  <PecDisplayCard
                    key={pec._id}
                    onClick={() => navigate(`/pec-detail/${pec._id}`)}
                  >
                    <h4>{pec.category}</h4>
                    <img src={pec.picture} />
                    <p>{pec.name}</p>
                  </PecDisplayCard>
                );
              })
            ) : (
              <h4>No PECs associated yet with this profile</h4>
            )}
          </MainPecsDisplaySection>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default PecDisplayScreen;
