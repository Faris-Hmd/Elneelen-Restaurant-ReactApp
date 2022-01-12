/** @format */
import React from "react";
import { Link } from "react-router-dom";

class LoginControl extends React.Component {
  constructor() {
    super();
    this.userName = React.createRef();
    this.passWord = React.createRef();
  }
  state = {
    user: {
      Faris: {
        passWord: "faris",
      },
      hmd: {
        passWord: "hmd",
      },
      adam: {
        passWord: "admin",
      },
    },
    isLoggin: false,
  };

  handleLogin = () => {
    let userName = this.userName.current.value;
    let passWordOne = this.state.user[userName].passWord;
    let passwordTwo = this.passWord.current.value;

    passWordOne == passwordTwo
      ? this.setState({ isLoggin: true })
      : this.setState({ isLoggin: false });
  };

  handleLogout = () => {
    this.setState({ isLoggin: false });
  };
  UserGreeting = (props) => {
    return (
      <div>
        <form className="form">
          <h2>Welcom Back {props.name}</h2>
          <button className="btn-order" onClick={this.handleLogout}>
            Logout
          </button>
        </form>
      </div>
    );
  };
  GuestGreeting = () => {
    return (
      <div>
        <form className="form" onSubmit={this.handleLogin}>
          <h2>Please sigh in</h2>
          <input type="text" placeholder="UserName" ref={this.userName} />
          <input type="password" placeholder="PassWord" ref={this.passWord} />
          <Link to="/menu">
            <button type="submit" className="btn-order">
              Login
            </button>
          </Link>
        </form>
      </div>
    );
  };

  render() {
    return this.state.isLoggin ? (
      <this.UserGreeting name={this.userName.current.value} />
    ) : (
      <this.GuestGreeting />
    );
  }
}
export default LoginControl;
