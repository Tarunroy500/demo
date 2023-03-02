import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import LoggedInNavbar from "../components/Navbar/LoggedInNavbar";
import Loader from "../components/Loader/Loader"
import Navbar from "../components/Navbar/Navbar";
import { asyncloaduser } from "../store/userActions";
const SharedHomePage = () => {
  const { isLoggedIn, loading } = useSelector((store) => store.user);
  console.log(loading);
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(asyncloaduser());
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <>
      <div
        className="nav"
        style={{
          position: "fixed",
          width: "100%",
          zIndex: "999",
        }}
      >
        {isLoggedIn ? <LoggedInNavbar /> : <Navbar />}
      </div>
      <div className="outlets" style={{ paddingTop: "6vmax" }}>
        <Outlet />
      </div>
    </>
  );
};

export default SharedHomePage;
