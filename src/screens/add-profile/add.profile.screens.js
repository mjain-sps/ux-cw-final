import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../components/buttoncomponent/button.components";
import CameraComponent from "../../components/cameracomponent/camera.components";
import InputComponent from "../../components/inputcomponent/input.components";
import { studentProfileData } from "../../data/student.profile.data";
import {
  InputGroupContainer,
  MasterContainer,
  ProfilePicPreviewContainer,
  TwoColumnInputGroups,
} from "./add.profile.styles";
import imgFile from "../../assets/profile-pic-boy.jpeg";
import blankDisplayPic from "../../assets/blank-dp.jpeg";

const AddProfile = () => {
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

  const navigate = useNavigate();
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
  console.log(input);

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

  const handleAddProfile = (e) => {
    e.preventDefault();
    const {
      fullName,
      guardianName,
      guardianEmail,
      age,
      pecLevel,
      primaryLanguage,
      secondaryLanguage,
    } = input;
    const payload = {
      fullName,
      guardianName,
      guardianEmail,
      age,
      primaryLanguage,
      secondaryLanguage: secondaryLanguage || "",
      pecLevel: pecLevel || "",
      displayPic: imgFile || blankDisplayPic,
    };
    studentProfileData.push(payload);
    navigate("/choose-profile");
  };
  console.log(
    fullNameErrors,
    guardianEmailErrors,
    guardianNameErrors,
    ageErrors,
    primaryLanguageErrors
  );
  return (
    <>
      <MasterContainer>
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

        <p>Profile Picture</p>
        <FontAwesomeIcon
          icon={faCamera}
          onClick={() => setCameraToggle(true)}
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
          <img src={picureAccepted ? imgFile : blankDisplayPic} />
        </ProfilePicPreviewContainer>
        <ButtonComponent
          type="button"
          onClick={handleAddProfile}
          name="add-profile-cta"
          disabled={validated ? false : true}
        >
          Add
        </ButtonComponent>
      </MasterContainer>
    </>
  );
};

export default AddProfile;
