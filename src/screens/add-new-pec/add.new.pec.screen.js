import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InputComponent from "../../components/inputcomponent/input.components";
import {
  MasterComponent,
  InputGroupContainer,
} from "./add.new.pec.screen.styles";
import applePic from "../../assets/pecs/fruits/apple.jpeg";
import appleSound from "../../assets/sounds/apple-sound.m4a";
import ButtonComponent from "../../components/buttoncomponent/button.components";
import { pecsData } from "../../data/pecs.data";
import { studentProfileData } from "../../data/student.profile.data";
import { Spinner } from "../../components/spinnercomponent/spinner.styles";
const AddNewPecScreen = () => {
  const [input, setInput] = useState({ title: "", category: "" });
  const [pecsAssociated, setPecsAssociated] = useState(null);
  const [categorySelected, setCategorySelected] = useState("");
  const navigate = useNavigate();
  const { fullName } = useParams();
  useEffect(() => {
    if (fullName) {
      const studentFound = studentProfileData.find(
        (st) => st.fullName === fullName
      );
      if (studentFound) {
        if (studentFound.pecsAssociated) {
          const pecs = studentFound.pecsAssociated.map((pec) =>
            pecsData.find((pecs) => pecs._id === pec && pecs.category)
          );
          setPecsAssociated(pecs);
        } else {
          setPecsAssociated([]);
        }
      }
    }
  }, [fullName]);
  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  console.log(input);
  const handlePecSave = (e) => {
    e.preventDefault();

    pecsData.push({
      _id: `pec_${pecsData.length + 1}`,
      name: input.title,
      category: categorySelected || input.category,
      picture: applePic,
      sound: appleSound,
    });

    const studentObject = studentProfileData.find(
      (st) => st.fullName === fullName
    );
    if (studentObject.pecsAssociated) {
      studentObject.pecsAssociated.push(`pec_${pecsData.length}`);
    } else {
      studentObject["pecsAssociated"] = [`pec_${pecsData.length}`];
    }
    navigate(`/pec-display/${fullName}`);
  };

  return (
    <>
      {fullName && pecsAssociated ? (
        <MasterComponent>
          <h4>Add New PEC</h4>
          <InputGroupContainer>
            <label>Enter PEC name</label>
            <InputComponent
              type="text"
              name="title"
              placeholder="Enter PEC title/name here"
              onChange={handleInputChange}
              value={input.title}
            />
          </InputGroupContainer>
          {pecsAssociated.length ? (
            <select onChange={(e) => setCategorySelected(e.target.value)}>
              <option value="">Select PEC category</option>

              {pecsAssociated.map((pec) => {
                return (
                  <option key={pec._id} value={pec.category}>
                    {pec.category}
                  </option>
                );
              })}
            </select>
          ) : (
            ""
          )}

          <h6>OR Add New Category here</h6>

          <InputGroupContainer>
            <label>Enter PEC Category</label>
            <InputComponent
              type="text"
              name="category"
              placeholder="Enter PEC category here"
              onChange={handleInputChange}
              value={input.category}
              disabled={categorySelected ? true : false}
            />
          </InputGroupContainer>

          <img src={applePic} />
          <ButtonComponent
            type="button"
            onClick={handlePecSave}
            name="add-pec-button"
            disabled={
              (input.title && input.category) || categorySelected ? false : true
            }
          >
            Save
          </ButtonComponent>
        </MasterComponent>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default AddNewPecScreen;
