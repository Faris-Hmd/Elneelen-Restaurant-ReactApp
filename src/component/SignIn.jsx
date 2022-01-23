/** @format */

import React from "react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
const SignIn = (props) => {
  const history = useNavigate();
  const userName = useRef("");
  const password = useRef("");

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log(props.currentUser);
    console.log(props.users);
    props.users.map((users) => {
      if (userName.current.value === users.userName) {
        if (password.current.value === users.passWord) {
          props.setIsLog(true);
          const currentUserd = props.users.find(
            (user) => user.userName === userName.current.value
          );
          props.setCurrentUser(currentUserd);

          history("/");
        }
      }
      userName.current.value = "";
      password.current.value = "";
      return null;
    });
  };

  return (
    <div>
      <div className={`signInMassege ${props.isLog ? "hide" : ""} `}>
        You must sign in first to accese this page
      </div>

      <form id="signIn" onSubmit={handleSignIn}>
        <i className="fa fa-user fa-2x"></i>
        <input type="text" placeholder="Username" ref={userName} />
        <br />
        <i className="fa fa-lock fa-2x"></i>
        <input type="password" placeholder="Password" ref={password} />
        <input value="Log in" type="submit" />
        <div className="creatAccount">
          haven’t account?
          <Link className="Link" to="/signUp">
            <span>Creat Now</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
