import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import ButtonComponent from "../../components/buttoncomponent/button.components";
import InputComponent from "../../components/inputcomponent/input.components";
import { Spinner } from "../../components/spinnercomponent/spinner.styles";
import { pecsData } from "../../data/pecs.data";
import {
  BackButtonContainer,
  InputGroupContainer,
  MasterContainer,
} from "./edit.pec.styles";
const EditPecScreen = () => {
  const { _id, fullName } = useParams();
  const [pecToBeEdited, setPecToBeEdited] = useState(null);
  const [input, setInput] = useState({ title: "", category: "" });

  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (_id) {
      const pecFound = pecsData.find((pec) => pec._id === _id);
      if (pecFound) {
        setPecToBeEdited(pecFound);
      }
    }
  }, [_id]);

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handlePecEdit = (e) => {
    e.preventDefault();
    const pecFound = pecsData.find((pec) => pec._id === _id);
    pecFound["name"] = input.title || pecToBeEdited.name;
    pecFound["category"] = input.category || pecToBeEdited.category;
    navigate(`/pec-display/${fullName}`);
  };

  return (
    <>
      {pecToBeEdited ? (
        <>
          <MasterContainer>
            <BackButtonContainer
              onClick={() =>
                navigate(
                  location.state?.from?.pathname
                    ? location.state.from.pathname
                    : "/choose-profile"
                )
              }
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </BackButtonContainer>
            <h4>Edit PEC Name/Category</h4>
            <InputGroupContainer>
              <label>Enter Pec Title/Name</label>
              <InputComponent
                type="text"
                value={input.title || pecToBeEdited.name}
                onChange={handleInputChange}
                placeholder="Enter PEC title/name"
                name="title"
              />
            </InputGroupContainer>

            <InputGroupContainer>
              <label>Enter Pec Category</label>
              <InputComponent
                type="text"
                value={input.category || pecToBeEdited.category}
                onChange={handleInputChange}
                placeholder="Enter PEC category"
                name="category"
              />
            </InputGroupContainer>

            <ButtonComponent
              type="button"
              disabled={false}
              onClick={handlePecEdit}
              name="pec-edit-button"
            >
              Update
            </ButtonComponent>
          </MasterContainer>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default EditPecScreen;
