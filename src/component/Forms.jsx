/** @format */

import React from "react";
import { useRef } from "react";
const Forms = (props) => {
  const userName = useRef("");
  const password = useRef("");

  const handleSignIn = () => {
    props.user.map((user) => {
      if (user.name === userName.current.value) {
        if (user.password === password.current.value) {
          props.currentUser(userName.current.value);
          props.isLoggin(true);
        }
      }
      return null;
    });
  };

  return (
    <div>
      <form id="signIn" onSubmit={handleSignIn}>
        <i className="fa fa-user fa-2x"></i>
        <input type="text" placeholder="Username" ref={userName} />
        <br />
        <i className="fa fa-lock fa-2x"></i>
        <input type="password" placeholder="Password" ref={password} />
        <input value="Log in" type="submit" />
        <div className="creatAccount">
          haven’t account?
          <span>Creat Now</span>
        </div>
      </form>

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
          <span>Login</span>
        </div>
      </form>
    </div>
  );
};

export default Forms;
