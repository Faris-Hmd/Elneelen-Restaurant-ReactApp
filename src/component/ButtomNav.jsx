/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";

const ButtomNav = (props) => {
  const [currentPage, setCurrenPage] = useState("home");
  return (
    <div>
      <div className="buttomNav">
        <Link
          to="/"
          className="Link buttomNavLink"
          onClick={() => {
            setCurrenPage("home");
          }}
        >
          <img
            src="./image/home-internet-svgrepo-com.svg"
            alt="home"
            className={currentPage === "home" ? "currentPage" : ""}
          />
          <div className="disc">Home</div>
        </Link>
        <Link
          to={`/${props.isLog ? "cart" : "signin"}`}
          className="Link buttomNavLink"
          onClick={() => {
            setCurrenPage("cart");
          }}
        >
          <img
            src="./image/shopping-cart-svgrepo-com.svg"
            alt="cart"
            className={currentPage === "cart" ? "currentPage" : ""}
          />
          <div className="disc">Shoping cart</div>
          <span
            className={` ${props.qu === true ? "cartQu" : "hideCartQu"}`}
          ></span>
        </Link>
       {/* <Link
          to="/"
          className="Link buttomNavLink"
          onClick={() => {
            setCurrenPage("cart");
          }}
        >
          <img
            src="./image/settings-cogwheel-svgrepo-com.svg"
            alt="settings"
            className={currentPage === "cart" ? "currentPage" : ""}
          />
          <div className="disc">Menu</div>
        </Link>*/ }
        <Link
          to={`/${props.isLog ? "cart" : "signin"}`}
          onClick={() => {
            setCurrenPage("delivery");
          }}
          className="Link buttomNavLink"
        >
          <img
            src="./image/delivery-svgrepo-com.svg"
            alt="delivery"
            className={currentPage === "delivery" ? "currentPage" : ""}
          />
          <div className="disc">Delivery</div>
        </Link>
        <Link
          to={`/${props.isLog ? "settings" : "signin"}`}
          onClick={() => {
            setCurrenPage("settings");
          }}
          className="Link buttomNavLink"
        >
          <img
            src="./image/settings-cogwheel-svgrepo-com.svg"
            alt="settings"
            className={currentPage === "settings" ? "currentPage" : ""}
          />
          <div className="disc">Settings</div>
        </Link>
      </div>
    </div>
  );
};

export default ButtomNav;
