/** @format */
import React from "react";
import "./App.css";

class loginControl extends React.Component {
  state = {
    name: "Faris Hmd Abdallah",
    isLoggin: true,
  };

  handleLog = () => {
    this.state.isLoggin
      ? this.setState({ isLoggin: false })
      : this.setState({ isLoggin: true });
  };
  userGreeting = (props) => {
    return (
      <div>
        <button onClick={this.handleLog}>Logout</button>
        <h2>Welcom Back {props.name}</h2>
      </div>
    );
  };
  guestGreeting = (props) => {
    return (
      <div>
        <button onClick={this.handleLog}>Login</button>
        <h2>Please Sign in</h2>
      </div>
    );
  };

  render() {
    return this.state.isLoggin ? (
      <this.userGreeting name={this.state.name} />
    ) : (
      <this.guestGreeting />
    );
  }
}
export default loginControl;
