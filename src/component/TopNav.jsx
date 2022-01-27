/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

const TopNav = () => {
  const history = useNavigate();

  return (
    <div className="topNav">
      <div
        className="backButton"
        onClick={() => {
          history(-1);
        }}
      >
        <img src="./image/Angle-left.svg" alt="" />
      </div>
      <div className="logo">
        <span>El</span>neelen
      </div>
    </div>
  );
};

export default TopNav;
