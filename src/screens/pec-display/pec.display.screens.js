import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import HeaderWithSearch from "../../components/header-with-search/header.with.search.components";
import StudentHelpCTAPanel from "../../components/student-help-cta/student.help.cta.panels";
import { registeredUser } from "../../data/user.data";
import { studentProfileData } from "../../data/student.profile.data";
import { pecsData } from "../../data/pecs.data";
import { Spinner } from "../../components/spinnercomponent/spinner.styles";
import FavouritePecsDisplayBar from "../../components/favourite-pec-bar/fav.pecs.display.bar";
import {
  MainPecsDisplaySection,
  MasterContainer,
  PecDisplayCard,
} from "./pec.display.styles";
import FooterComponent from "../../components/footer/footer.components";
import applePicture from "../../assets/pecs/fruits/apple.jpeg";
const PecDisplayScreen = () => {
  const { fullName } = useParams();

  const [searchKeyword, setSearchKeyword] = useState("");
  const [choosenStudentProfile, setChosenStudentProfile] = useState(null);
  const [associatedPecsData, setAssociatedPecsData] = useState([]);
  const [favouritePecs, setFavouritePecs] = useState([]);
  const [cameraToggle, setCameraToggle] = useState(false);
  const [pictureAccepted, setPictureAccepted] = useState(false);

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
  console.log(studentProfileData);
  useEffect(() => {
    if (pictureAccepted) {
      navigate(`/add-new-pec/${fullName}`);
    }
  }, [pictureAccepted]);

  const location = useLocation();

  return (
    <>
      {choosenStudentProfile ? (
        <MasterContainer>
          <HeaderWithSearch
            handleOnChange={handleOnChange}
            searchKeyword={searchKeyword}
            user={registeredUser[0]}
          />
          <StudentHelpCTAPanel pecLevel={choosenStudentProfile.pecLevel} />
          {favouritePecs.length ? (
            <FavouritePecsDisplayBar favouritePecs={favouritePecs} />
          ) : (
            <h4>No pecs in Favourites</h4>
          )}
          <MainPecsDisplaySection>
            {!searchKeyword ? (
              associatedPecsData && associatedPecsData.length ? (
                associatedPecsData.map((pec) => {
                  return (
                    <PecDisplayCard
                      key={pec._id}
                      onClick={() =>
                        navigate(`/pec-detail/${pec._id}/${fullName}`, {
                          state: { from: location },
                        })
                      }
                    >
                      <h4>{pec.category}</h4>
                      <img src={pec.picture} />
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
                        <img src={pec.picture} />
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
        </MasterContainer>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default PecDisplayScreen;
