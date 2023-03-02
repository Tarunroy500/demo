import React from "react";
const Roundedbtn = (props) => {
  return (
    <>
      <div {...props}>
        {props.logo !== undefined ? props.logo : ""}
        <h5>{props.inRound}</h5>
      </div>
    </>
  );
};

export default Roundedbtn;
