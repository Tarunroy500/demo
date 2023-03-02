import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SharedHomePage from "./Pages/SharedHomePage";
import LoggedInPage from "./Pages/LoggedInPage";
import Sir from "./components/Sir";
import "./App.css";
const App = () => {
  return (
    <>
      {/* <Sir /> */}
      <Routes>
        <Route path="/" element={<SharedHomePage />}>
          <Route index element={<HomePage />} />
          {/* <Route path="loggedin" element={} /> */}
          {/* <Route path="username" element={<Dashboard />} />
          <Route path="lists" element={<Lists />} />
          <Route path="settings" element={<SharedSettingsPage />}>
            <Route index element={<Settings />} />
            <Route path="security" element={<Security />} />
          </Route>
          <Route path="new-story" element={<Editor />} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
