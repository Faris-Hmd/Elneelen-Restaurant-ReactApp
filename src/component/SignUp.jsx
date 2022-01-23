/** @format */

import React from "react";
import { Link } from "react-router-dom";
const SignUp = (props) => {
  return (
    <form id="signUp">
      <i className="fa fa-user fa-2x"></i>
      <input type="text" placeholder="Username" />
      <br />
      <i className="fa fa-envelope fa-2x"></i>
      <input type="email" placeholder="Email" />
      <br />
      <i className="fa fa-credit-card fa-2x"></i>
      <input type="number" placeholder="Credit Card" />
      <br />
      <i className="fa fa-lock fa-2x"></i>
      <input type="password" placeholder="Password" />
      <input type="submit" value="Creat Now" />
      <br />
      <div className="already">
        Already have acount?
        <Link className="Link" to="/signIn">
          <span>Login</span>
        </Link>
      </div>
    </form>
  );
};

export default SignUp;
