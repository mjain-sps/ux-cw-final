import {
  faCamera,
  faChevronLeft,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import ButtonComponent from "../../components/buttoncomponent/button.components";
import CameraComponent from "../../components/cameracomponent/camera.components";
import InputComponent from "../../components/inputcomponent/input.components";
import { studentProfileData } from "../../data/student.profile.data";
import {
  BackButtonContainer,
  BackButtonWrapper,
  DeleteStudentProfile,
  InputGroupContainer,
  MasterContainer,
  ProfilePicPreviewContainer,
  ProfilePicureWrapper,
  TwoColumnInputGroups,
} from "./edit.profile.styles";
import imgFile from "../../assets/profile-pic-boy.jpeg";
import blankDisplayPic from "../../assets/blank-dp.jpeg";
import SmallModal from "../../components/SmallModalComponent/small.modal";

const EditProfile = () => {
  const { fullName } = useParams();

  useEffect(() => {
    if (fullName) {
      const studentData = studentProfileData.find(
        (st) => st.fullName === fullName
      );
      if (studentData) {
        const {
          fullName,
          guardianEmail,
          guardianName,
          pecLevel,
          age,
          primaryLanguage,
          secondaryLanguage,
        } = studentData;
        setInput({
          ...input,
          fullName,
          guardianName,
          guardianEmail,
          pecLevel,
          age,
          primaryLanguage,
          secondaryLanguage,
        });
      }
    }
  }, [fullName]);
  const [input, setInput] = useState({
    fullName: "",
    guardianName: "",
    guardianEmail: "",
    pecLevel: 1,
    age: 1,
    primaryLanguage: "",
    secondaryLanguage: "",
  });
  const [fullNameErrors, setFullNameErrors] = useState("");
  const [guardianNameErrors, setGuardianNameErrors] = useState("");
  const [guardianEmailErrors, setGuardianEmailErrors] = useState("");
  const [ageErrors, setAgeErrors] = useState("");
  const [primaryLanguageErrors, setPrimaryLanguageErrors] = useState("");
  const [cameraToggle, setCameraToggle] = useState(false);
  const [picureAccepted, setPictureAccepted] = useState(false);
  const [validated, setValidated] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);
  const [modalConfirmation, setModalConfirmation] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  //Functions her
  const handleInputValidation = (name, value) => {
    if (name === "guardianEmail") {
      const emailRegex =
        /^([\w\d-_.?]{3,30})@([\w-?]{3,10})\.([\w-?]{2,6})(\.[\w-?]{2,5})?$/;
      if (!emailRegex.test(value)) {
        setGuardianEmailErrors("Invalid email address");
      } else {
        setGuardianEmailErrors("");
      }
    } else if (name === "fullName") {
      const digitCheck = /[\d@%+#&*-:'|±!$\^?\=()_{};<>/[\]]/;
      if (value.length < 3) {
        setFullNameErrors("Name should be atleast three characters");
      } else if (digitCheck.test(value)) {
        setFullNameErrors("Invalid characters in name");
      } else {
        setFullNameErrors("");
      }
    } else if (name === "guardianName") {
      const digitCheck = /[\d@%+#&*-:'|±!$\^?\=()_{};<>/[\]]/;
      if (value.length < 3) {
        setGuardianNameErrors("Name should be atleast three characters");
      } else if (digitCheck.test(value)) {
        setGuardianNameErrors("Invalid characters in name");
      } else {
        setGuardianNameErrors("");
      }
    } else if (name === "primaryLanguage") {
      const digitCheck = /[\d@%+#&*-:'|±!$\^?\=()_{};<>/[\]]/;
      if (digitCheck.test(value)) {
        setPrimaryLanguageErrors("Invalid characters in language");
      } else {
        setPrimaryLanguageErrors("");
      }
    } else if (name === "age") {
      if (value <= 0 || value > 100) {
        setAgeErrors("Please enter a valid age");
      } else {
        setAgeErrors("");
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleInputValidation(name, value);
    setInput({
      ...input,
      [name]: value,
    });
  };

  useEffect(() => {
    if (
      input.fullName &&
      input.guardianName &&
      input.guardianEmail &&
      input.age &&
      input.primaryLanguage &&
      !fullNameErrors &&
      !guardianNameErrors &&
      !guardianEmailErrors &&
      !ageErrors &&
      !primaryLanguageErrors
    ) {
      setValidated(true);
    }
  }, [
    fullNameErrors,
    guardianNameErrors,
    guardianEmailErrors,
    ageErrors,
    primaryLanguageErrors,
    input,
  ]);

  const handleEditProfile = (e) => {
    e.preventDefault();

    const studentProfile = studentProfileData.find(
      (st) => st.fullName === fullName
    );
    studentProfile["fullName"] = input.fullName;
    studentProfile["guardianName"] = input.guardianName;
    studentProfile["guardianEmail"] = input.guardianEmail;
    studentProfile["age"] = input.age;
    studentProfile["pecLevel"] = input.pecLevel || "";
    studentProfile["primaryLanguage"] = input.primaryLanguage;
    studentProfile["secondaryLanguage"] = input.secondaryLanguage || "";

    navigate(`/pec-display/${studentProfile.fullName}`);
  };

  //To delete the student
  useEffect(() => {
    if (modalConfirmation) {
      console.log("entering here");
      const indexFound = studentProfileData.findIndex(
        (st) => st.fullName === fullName
      );
      studentProfileData.splice(indexFound, 1);
      navigate("/choose-profile");
    }
  }, [modalConfirmation]);

  return (
    <>
      <MasterContainer>
        <div>
          <h4>Edit Student Profile</h4>
        </div>

        <DeleteStudentProfile onClick={() => setDisplayModal(true)}>
          <span>Delete...</span>
          <FontAwesomeIcon icon={faTrash} />
        </DeleteStudentProfile>

        {/* Full Name Input */}
        <InputGroupContainer>
          <label>Full Name</label>
          <span>*</span>
          <InputComponent
            type="text"
            value={input.fullName}
            name="fullName"
            onChange={handleInputChange}
            placeholder="Enter your Full Name here"
          />
          <p>{fullNameErrors}</p>
        </InputGroupContainer>

        {/* Guardian Name Input */}
        <InputGroupContainer>
          <label>Parent/Guardian Full Name</label>
          <span>*</span>
          <InputComponent
            type="text"
            value={input.guardianName}
            name="guardianName"
            onChange={handleInputChange}
            placeholder="Enter Parent/Guardian Full Name here"
          />
          <p>{guardianNameErrors}</p>
        </InputGroupContainer>

        {/* Guardian Email Input */}
        <InputGroupContainer>
          <label>Parent/Guardian Email</label>
          <span>*</span>
          <InputComponent
            type="email"
            value={input.guardianEmail}
            name="guardianEmail"
            onChange={handleInputChange}
            placeholder="Enter Parent/Guardian Email Address here"
          />
          <p>{guardianEmailErrors}</p>
        </InputGroupContainer>

        <TwoColumnInputGroups>
          {/*PEC Level Input */}
          <InputGroupContainer>
            <label>PEC Level</label>
            <InputComponent
              type="number"
              value={input.pecLevel}
              name="pecLevel"
              onChange={handleInputChange}
              placeholder="Enter PEC level - if applicable"
            />
          </InputGroupContainer>

          {/*AGE Input */}
          <InputGroupContainer>
            <label>Age (years)</label>
            <InputComponent
              type="number"
              value={input.age}
              name="age"
              onChange={handleInputChange}
              placeholder="Enter Age in years"
            />
            <p>{ageErrors}</p>
          </InputGroupContainer>
        </TwoColumnInputGroups>

        {/*Primary Languag */}
        <InputGroupContainer>
          <label>Primary Language</label>
          <span>*</span>
          <InputComponent
            type="text"
            value={input.primaryLanguage}
            name="primaryLanguage"
            onChange={handleInputChange}
            placeholder="Enter Primary Language"
          />
          <p>{primaryLanguageErrors}</p>
        </InputGroupContainer>

        {/*Secondary LAnguage */}
        <InputGroupContainer>
          <label>Secondary Language</label>
          <InputComponent
            type="text"
            value={input.secondaryLanguage}
            name="secondaryLanguage"
            onChange={handleInputChange}
            placeholder="Enter Secondary Language - if applicable"
          />
        </InputGroupContainer>

        <label>Profile Picture</label>
        <ProfilePicureWrapper>
          <FontAwesomeIcon
            icon={faCamera}
            onClick={() => setCameraToggle(true)}
            className="camera-icon"
          />
          {cameraToggle ? (
            <CameraComponent
              setCameraToggle={setCameraToggle}
              imgFile={imgFile}
              setPictureAccepted={setPictureAccepted}
            />
          ) : (
            ""
          )}
          <ProfilePicPreviewContainer>
            <img src={picureAccepted ? imgFile : imgFile} />
          </ProfilePicPreviewContainer>
        </ProfilePicureWrapper>

        <BackButtonWrapper>
          <ButtonComponent
            type="button"
            onClick={handleEditProfile}
            name="add-profile-cta"
            disabled={validated ? false : true}
          >
            Update
          </ButtonComponent>
        </BackButtonWrapper>
        <BackButtonContainer
          onClick={() => navigate(location.state.from.pathname)}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </BackButtonContainer>
      </MasterContainer>
      {displayModal ? (
        <SmallModal
          modalBodyContent="Are you sure ?"
          setModalConfirmation={setModalConfirmation}
          setDisplayModal={setDisplayModal}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default EditProfile;
