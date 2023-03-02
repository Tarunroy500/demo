import React from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Trending from "./Components/TrendingSection/Trending";
import Article from "./Components/Article/Article";
import { Route, Routes } from "react-router-dom";
import SharedHomePage from "./Pages/SharedHomePage";
import HomePage from "./Pages/HomePage";
import LoggedInPage from "./Pages/LoggedInPage";
import SharedSettingsPage from "./Pages/SharedSettingsPage";
import LoggedInNavbar from "./Components/Navbar/LoggedInNavbar";
import Dashboard from "./Components/Profile/Dashboard/Dashboard";
import Lists from "./Components/Profile/Lists/Lists";
import Settings from "./Components/Profile/Settings/Settings";
import Security from "./Components/Profile/Settings/Security";
import Editor from "./Components/Editor/Editor";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedHomePage />}>
          <Route index element={<HomePage />} />
          <Route path="loggedin" element={<LoggedInPage />} />
          <Route path="username" element={<Dashboard />} />
          <Route path="lists" element={<Lists />} />
          <Route path="settings" element={<SharedSettingsPage />}>
            <Route index element={<Settings />} />
            <Route path="security" element={<Security />} />
          </Route>
          <Route path="new-story" element={<Editor />} />
        </Route>
      </Routes>
      {/* <Navbar/>
      <Header/>
      <Trending/>
      <Article/> */}
    </>
  );
};

export default App;
