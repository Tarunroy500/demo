import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import medium_logo from "../../assets/logo.png";
// import { handleGettingStarted } from '../../store/GetStartedSlice/GetStartedSlice'
import module from "../Navbar/Navbar.module.css";
import { useGoogleLogin } from "@react-oauth/google";
import { asyncsignup } from "../../store/userActions";

const Navbar = () => {
  const Dispatch = useDispatch();
  const [scroll, setScroll] = useState(false);
  const getStarted = () => {
    // Dispatch(handleGettingStarted())
  };
  const login = useGoogleLogin({
    onSuccess: (codeResponse) =>
      Dispatch(asyncsignup(codeResponse.access_token)),
  });
  const handleScroll = () => {
    if (Math.floor(window.scrollY) > 400) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  console.log(scroll);
  return (
    <>
      <nav className={`${module.nav} ${scroll ? module.bgWhite : ""}`}>
        <div className={`${module.left}`}>
          <img src={medium_logo} alt="logo" />
          <h2>Medium</h2>
        </div>
        <div className={`${module.right} `}>
          <h5>Our Story</h5>
          <h5>Membership</h5>
          <h5>Write</h5>
          <h5>Sign In</h5>
          <div
            onClick={getStarted}
            style={{ cursor: "pointer" }}
            className={`curvy_box  ${scroll ? module.bgGreen : ""}`}
          >
            <h4 onClick={login}>Get Started</h4>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
