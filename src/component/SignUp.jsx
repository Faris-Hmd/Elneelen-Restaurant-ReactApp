/** @format */

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import axios from "axios";

const SignUp = (props) => {
  const history = useNavigate();
  const [userName, setUserName] = useState();
  const [passWord, setPassWord] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();

    setIsLoading(true);
    const newUser = { userName, passWord, cart: [] };
    axios
      .post("http://localhost:8000/usersdata", newUser)
      .then(() => {
        setIsLoading(false);
        history("/signIn");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="formContainer">
      <form id="signUp" onSubmit={handleSignUp}>
        <i className="fa fa-user fa-2x"></i>
        <input
          required
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <br />
        <i className="fa fa-envelope fa-2x"></i>
        <input type="email" placeholder="Email" />
        <br />
        <i className="fa fa-credit-card fa-2x"></i>
        <input type="number" placeholder="Credit Card" />
        <br />
        <i className="fa fa-lock fa-2x"></i>
        <input
          required
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassWord(e.target.value);
          }}
        />
        {!isLoading && <input type="submit" value="Creat Now" />}
        {isLoading && <input type="submit" disabled value="Loading..." />}
        <br />
        <div className="already">
          Already have acount?
          <Link className="Link" to="/signIn">
            <span>Login</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
