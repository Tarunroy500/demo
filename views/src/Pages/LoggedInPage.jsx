import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import LoggedInNavbar from "../components/Navbar/LoggedInNavbar";
import { IoAddOutline } from "react-icons/io5";
import Articles from "../components/Article/Article";
import Picks from "../components/Picks/Picks";
import module from "./LoggedInPage.module.css";
const LoggedInPage = () => {
  return (
    <>
      <div className={`${module.wrap}`}>
        <div className={`${module.left}`}>
          <div className={`${module.topBar}`}>
            <IoAddOutline />
            <h5>For You</h5>
            <h5>Following</h5>
          </div>
          <Articles width="100%" />
        </div>
        <div className={`${module.right}`}>
          <Picks />
        </div>
      </div>
    </>
  );
};

export default LoggedInPage;
