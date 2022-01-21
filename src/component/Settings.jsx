/** @format */

import Forms from "./Forms";

/** @format */
const Settings = (props) => {
  const currentUser = props.currentUser;
  console.log(currentUser.name);
  const Profile = (props) => {
    return (
      <div className="profileCon">
        <div className="profileImgCon">
          <img src="./image/back 4.jpeg" alt="" />
        </div>
        <div className="username">{props.userName}</div>
      </div>
    );
  };

  return (
    <div className="settingsCon ">
      <div className={`${props.isLoggin(0) ? "hide" : ""} `}>
        <Forms
          handleSetCurrentUser={props.handleSetCurrentUser}
          user={props.user}
          isLoggin={props.isLoggin}
        />
      </div>
      <div className={`${props.isLoggin(1) ? "" : "hide"}`}>
        <Profile userName={currentUser.name} />
        <div className="settingsOpthionCon">
          <div className="settingsOpthion">My profile</div>
          <div className="settingsOpthion">My Ad</div>
          <div className="settingsOpthion">Add Ad</div>
          <div className="settingsOpthion">About</div>
          <div className="settingsOpthion">Servies</div>
          <div className="settingsOpthion">Rate</div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
