import React, { useState } from "react";
import { createContext } from "react";
import "./App.css";

//import react router dome
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//importing screens
import LoginScreen from "./screens/login/login.screen";
import SignupScreen from "./screens/Signup/signup.screens";
import ChooseStudentProfile from "./screens/choose-profile/choose.student.profile.screens";
import AddProfile from "./screens/add-profile/add.profile.screens";
import PecDisplayScreen from "./screens/pec-display/pec.display.screens";
import PecDetailsScreen from "./screens/pec-details/pec.details.screens";
import AddNewPecScreen from "./screens/add-new-pec/add.new.pec.screen";
import EditPecScreen from "./screens/edit-pecs/edit.pec.screen";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/Themes";
import AdminPanel from "./screens/admin-panel/admin.panels.screen";
import EditProfile from "./screens/edit-profile/edit.profile.screens";
import SearchingDevice from "./screens/searching-device/searching.device";
import StudentInterfacePecDisplayPage from "./screens/student-interface/student.interface.pec-display";
import SubscriptionScreen from "./screens/subscription-plan/subscription.plan";

export const currentTheme = createContext();
const App = () => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("english");

  return (
    <currentTheme.Provider value={{ theme, setTheme, setLanguage, language }}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Router>
          <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="/choose-profile" element={<ChooseStudentProfile />} />
            <Route path="/add-profile" element={<AddProfile />} />
            <Route path="/edit-profile/:fullName" element={<EditProfile />} />
            <Route
              path="/pec-display/:fullName"
              element={<PecDisplayScreen />}
            />
            <Route
              path="/pec-detail/:id/:fullName"
              element={<PecDetailsScreen />}
            />
            <Route
              path="/add-new-pec/:fullName"
              element={<AddNewPecScreen />}
            />
            <Route
              path="/edit-pec/:_id/:fullName"
              element={<EditPecScreen />}
            />
            <Route path="/dashboard" element={<AdminPanel />} />
            <Route path="/searching-device" element={<SearchingDevice />} />
            <Route
              path="/student-interface"
              element={<StudentInterfacePecDisplayPage />}
            />
            <Route path="/subscription-plan" element={<SubscriptionScreen />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </currentTheme.Provider>
  );
};

export default App;
