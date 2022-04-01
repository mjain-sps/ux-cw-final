import React from "react";
import "./App.css";
//import react router dome
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//importing screens
import LoginScreen from "./screens/login/login.screen";
import SignupScreen from "./screens/Signup/signup.screens";
import ChooseStudentProfile from "./screens/choose-profile/choose.student.profile.screens";
import AddProfile from "./screens/add-profile/add.profile.screens";
import PecDisplayScreen from "./screens/pec-display/pec.display.screens";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/choose-profile" element={<ChooseStudentProfile />} />
          <Route path="/add-profile" element={<AddProfile />} />
          <Route path="/pec-display/:fullName" element={<PecDisplayScreen />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
