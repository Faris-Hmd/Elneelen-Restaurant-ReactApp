/** @format */
import React from "react";
import { useState } from "react";
import CartList from "./Cart";

const NavBar = (props) => {
  const [cartShow, setCartShow] = useState("");
  const showCartSideMenu = () => {
    if (cartShow === "") {
      setCartShow("showCartSideMenu");
    } else {
      setCartShow("");
    }
  };

  return (
    <>
      <div className={`cartSideMenu ${cartShow}`}>
        <CartList DB={props.DB} />
      </div>
      <header>
        <div className="nav-bar">
          <ul>
            <li id="side-close-btn">
              <i className="fa fa-bars fa-2x"></i>
            </li>
            <li>
              <i className="fa fa-adjust fa-2x"></i>
            </li>
            <li>
              <i className="fa fa-search fa-2x"></i>
            </li>
            <li onClick={showCartSideMenu}>{props.quantity()}</li>
          </ul>
          <span className="logo ">
            <span>El</span>neelen
          </span>
        </div>
      </header>
    </>
  );
};

export default NavBar;
