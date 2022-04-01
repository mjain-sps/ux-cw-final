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
} from "./login.styles";

const LoginScreen = () => {
  //Define states here
  const [input, setInput] = useState({ email: "", password: "" });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [validated, setValidated] = useState(false);
  const [credentialError, setCredentialErrors] = useState("");

  const navigate = useNavigate();

  //define functions here

  const handleInputValidation = (name, value) => {
    if (name === "email") {
      const emailRegex =
        /^([\w\d-_.?]{3,30})@([\w-?]{3,10})\.([\w-?]{2,6})(\.[\w-?]{2,5})?$/;
      if (!emailRegex.test(value)) {
        setEmailError("Invalid email address");
      } else {
        setEmailError("");
      }
    } else {
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

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = registeredUser[0];
    if (input.email === email && input.password === password) {
      navigate("/choose-profile");
    } else {
      setCredentialErrors("Invalid credentials");
    }
  };

  useEffect(() => {
    if (input.email && input.password && !emailError && !passwordError) {
      setValidated(true);
    }
  }, [passwordError, emailError]);
  return (
    <>
      <MasterContainer>
        <StaticHeader />
        <LoginContainer>
          <div>
            <h4>Login</h4>
            <p>{credentialError}</p>
          </div>
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
          </InputGroupContainer>

          <ButtonComponent
            type="button"
            onClick={handleLogin}
            disabled={validated ? false : true}
            backgroundColor="red"
            name="login-button"
          >
            Login
          </ButtonComponent>
          {/* <SpinnerComponent /> */}
        </LoginContainer>

        <Footer>Need an account?</Footer>
      </MasterContainer>
    </>
  );
};

export default LoginScreen;
