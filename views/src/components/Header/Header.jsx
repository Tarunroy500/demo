import React from "react";
import Roundedbtn from "../Ui/Roundedbtn";
import HeaderCss from "../Header/Header.module.css";
const Header = () => {
  return (
    <>
      <div
        className={`${HeaderCss.header}`}
        style={{ backgroundColor: `#FFC017` }}
      >
        <div className={`${HeaderCss.lefty}`}>
          <h1>Stay Curious.</h1>
          <h4>
            Discover stories, thinking, and expertise from writers on any topic.
          </h4>
          <Roundedbtn
            style={{ padding: "0.7vmax 0" }}
            className="curvy_box"
            inRound="Start Reading"
          />
        </div>
        <div className={`${HeaderCss.animations_text}`}>
          <p>MMMMMMMMMMMMMMMMMMMM</p>
          <p>MMMMMMMMMMMMMMMMMMMM</p>
          <p>MMMMMMMMMMMMMMMMMMMM</p>
          <p>MMMMMMMMMMMMMMMMMMMM</p>
          <p>MMMMMMMMMMMMMMMMMMMM</p>
          <p>MMMMMMMMMMMMMMMMMMMM</p>
          <p>MMMMMMMMMMMMMMMMMMMM</p>
          <p>MMMMMMMMMMMMMMMMMMMM</p>
          <p>MMMMMMMMMMMMMMMMMMMM</p>
          <p>MMMMMMMMMMMMMMMMMMMM</p>
          <p>MMMMMMMMMMMMMMMMMMMM</p>
        </div>
      </div>
    </>
  );
};

export default Header;
