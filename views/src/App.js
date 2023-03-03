import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SharedHomePage from "./Pages/SharedHomePage";
import LoggedInPage from "./Pages/LoggedInPage";
import Editor from "./components/Editor/Editor";
import Sir from "./components/Sir";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadblogs, asyncloaduser } from "./store/userActions";
import Loader from "./components/Loader/Loader";
import Dashboard from "./components/Profile/Dashboard/Dashboard"
const App = () => {
  const { isLoggedIn, blogs, error, loading } = useSelector(
    (state) => state.user
  );
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(asyncloaduser());
    Dispatch(asyncloadblogs());
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <>
      {/* <Sir /> */}
      <Routes>
        <Route path="/" element={<SharedHomePage />}>
          <Route index element={<HomePage />} />
          <Route path="/:username" element={<Dashboard />} />
          {/* <Route path="lists" element={<Lists />} /> */}
          {/* <Route path="settings" element={<SharedSettingsPage />}>
            <Route index element={<Settings />} />
            <Route path="security" element={<Security />} />
          </Route> */}
          {isLoggedIn && <Route path="new-story" element={<Editor />} />}
        </Route>
        <Route path="*" element={<>not found</>} />
      </Routes>
    </>
  );
};

export default App;
