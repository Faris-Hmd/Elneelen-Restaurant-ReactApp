/** @format */

import { useNavigate } from "react-router-dom";

/** @format */
const Settings = (props) => {
  const history = useNavigate();
  const Profile = (props) => {
    return (
      <div className="profileCon">
        <div className="profileImgCon">
          <img src={`./image/${"back 4.jpeg"}`} alt={props.userName} />
        </div>
        <div className="username">{props.userName}</div>
      </div>
    );
  };

  return (
    <div className="settingsCon ">
      <div className={`${props.isLog ? "" : "hide"}`}>
        <Profile userName={props.currentUser.userName} />
        <div className="settingsOpthionCon">
          <div className="settingsOpthion">My profile</div>
          <div className="settingsOpthion">My Ad</div>
          <div className="settingsOpthion">Add Ad</div>
          <div className="settingsOpthion">About</div>
          <div className="settingsOpthion">Servies</div>
          <div className="settingsOpthion">Rate</div>
          <div
            className="settingsOpthion"
            onClick={() => {
              props.setIsLog(false);
              props.setCurrentUser({ cart: [] });
              history("/");
            }}
          >
            SignOut
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
