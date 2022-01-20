/** @format */

import React from "react";

const Profile = (props) => {
  return (
    <div className="profilePage">
      <div className="profileDetail">
        <div className="profileImg">
          <img src="./image/back 4.jpeg" alt="" />
        </div>
        <div className="username">@Faris Hmd</div>
      </div>
      <div className="profileOthionCon">
        <div className="profileOthion">My profile</div>
        <div className="profileOthion">My Ad</div>
        <div className="profileOthion">Add Ad</div>
        <div className="profileOthion">About</div>
        <div className="profileOthion">Servies</div>
        <div className="profileOthion">Rate</div>
      </div>
    </div>
  );
};

export default Profile;
