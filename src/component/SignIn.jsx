/** @format */

import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import axios from "axios";
const SignIn = (props) => {
  const history = useNavigate();
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:8000/usersdata")
      .then((res) => {
        props.setUsers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleSignIn = (e) => {
    e.preventDefault();
    props.users.map((user) => {
      if (userName === user.userName) {
        if (passWord === user.passWord) {
          props.setIsLog(true);
          props.setCurrentUser(user);
          history("/");
        }
      }
    });
    setPassWord("");
    setUserName("");
  };

  return (
    <div className="formContainer">
      <form id="signIn" onSubmit={handleSignIn}>
        <i className="fa fa-user fa-2x"></i>
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <br />
        <i className="fa fa-lock fa-2x"></i>
        <input
          type="password"
          placeholder="Password"
          value={passWord}
          onChange={(e) => {
            setPassWord(e.target.value);
          }}
        />
        <input value="Log in" type="submit" />
        <div className="creatAccount">
          haven’t account?
          <Link className="Link" to="/signUp">
            <span> Creat Now</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
