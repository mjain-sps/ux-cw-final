import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonComponent from "../../components/buttoncomponent/button.components";
import InputComponent from "../../components/inputcomponent/input.components";
import SpinnerComponent from "../../components/spinnercomponent/spinner.components";
import StaticHeader from "../../components/staticheader/static.header.components";
import { registeredUser } from "../../data/user.data";
import {
  Footer,
  InputGroupContainer,
  LoginContainer,
  MasterContainer,
} from "./signup.styles";

const SignupScreen = () => {
  //Define states here
  const [input, setInput] = useState({
    email: "",
    password: "",
    profileRequired: 1,
    fullName: "",
  });
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [validated, setValidated] = useState(false);

  const navigate = useNavigate();

  //define functions here

  const handleInputValidation = (name, value) => {
    if (name === "fullName") {
      const digitCheck = /[\d@%+#&*-:'|±!$\^?\=()_{};<>/[\]]/;
      if (value.length < 3) {
        setNameError("Name should be atleast three characters");
      } else if (digitCheck.test(value)) {
        setNameError("Invalid characters in name");
      } else {
        setNameError("");
      }
    }
    if (name === "email") {
      const emailRegex =
        /^([\w\d-_.?]{3,30})@([\w-?]{3,10})\.([\w-?]{2,6})(\.[\w-?]{2,5})?$/;
      if (!emailRegex.test(value)) {
        setEmailError("Invalid email address");
      } else {
        setEmailError("");
      }
    } else if (name === "password") {
      const passwordRegex = /[\w][@-_$%&*]/;
      if (!passwordRegex.test(value)) {
        setPasswordError(
          'Password must contain an alphabet, number and special character such as @, -, _, %"'
        );
      } else {
        setPasswordError("");
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

  const handleSignup = (e) => {
    e.preventDefault();
    const payload = {
      name: input.fullName,
      email: input.email,
      password: input.password,
      profiles: input.profileRequired,
    };
    registeredUser.push(payload);
    navigate("/choose-profile");
  };

  useEffect(() => {
    if (
      input.email &&
      input.password &&
      input.fullName &&
      input.profileRequired &&
      !nameError &&
      !emailError &&
      !passwordError
    ) {
      setValidated(true);
    }
  }, [passwordError, emailError, nameError]);
  return (
    <>
      <MasterContainer>
        <StaticHeader />
        <LoginContainer>
          <div>
            <h4>Signup</h4>
          </div>
          <InputGroupContainer>
            <label>Full Name</label>
            <InputComponent
              placeholder={"Enter your full name"}
              value={input.fullName}
              type="text"
              onChange={handleInputChange}
              name="fullName"
            />
            <p>{nameError}</p>
          </InputGroupContainer>

          <InputGroupContainer>
            <label>Email</label>
            <InputComponent
              placeholder={"Enter your email address"}
              value={input.email}
              type="email"
              onChange={handleInputChange}
              name="email"
            />
            <p>{emailError}</p>
          </InputGroupContainer>

          <InputGroupContainer>
            <label>Password</label>
            <InputComponent
              placeholder={"Enter your password"}
              value={input.password}
              type="password"
              onChange={handleInputChange}
              name="password"
            />
            <p>{passwordError}</p>
          </InputGroupContainer>

          <InputGroupContainer>
            <label>Profiles Required</label>
            <InputComponent
              placeholder={"Enter number of profiles required"}
              value={input.profileRequired}
              type="number"
              onChange={handleInputChange}
              name="profileRequired"
            />
          </InputGroupContainer>
          <ButtonComponent
            type="button"
            onClick={handleSignup}
            disabled={validated ? false : true}
            backgroundColor="red"
            name="login-button"
          >
            Signup
          </ButtonComponent>
          {/* <SpinnerComponent /> */}
        </LoginContainer>

        {/* <Footer>
          Need an account? <Link path="/signup">Signup</Link>
        </Footer> */}
      </MasterContainer>
    </>
  );
};

export default SignupScreen;
