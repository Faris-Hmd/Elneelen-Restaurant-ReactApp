/** @format */
const Settings = (props) => {
  const Profile = (props) => {
    return (
      <div className="profileCon">
        <div className="profileImgCon">
          <img src="./image/back 4.jpeg" alt="" />
        </div>
        <div className="username">{props.username}</div>
      </div>
    );
  };

  return (
    <div className="settingsCon">
      <Profile username={"@Faris Hmd"} />
      <div className="settingsOpthionCon">
        <div className="settingsOpthion">My profile</div>
        <div className="settingsOpthion">My Ad</div>
        <div className="settingsOpthion">Add Ad</div>
        <div className="settingsOpthion">About</div>
        <div className="settingsOpthion">Servies</div>
        <div className="settingsOpthion">Rate</div>
      </div>
    </div>
  );
};

export default Settings;
