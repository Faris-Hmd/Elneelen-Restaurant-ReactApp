/** @format */

import React from "react";
import { Link } from "react-router-dom";

const ButtomNav = () => {
  return (
    <div>
      <div className="buttomNav">
        <Link to="/menu" className="Link buttomNavLink">
          <i className=" fa fa-home fa-2x"></i>
          <div className="disc">Home</div>
        </Link>
        <Link to="/fav" className="Link buttomNavLink">
          <i className=" fa fa-shopping-cart fa-2x"></i>
          <div className="disc">Home</div>
        </Link>
        <Link to="cart" className="Link buttomNavLink">
          <i className=" fa fa-home fa-2x"></i>
          <div className="disc">Deliverly</div>
        </Link>
        <Link to="cart" className="Link buttomNavLink">
          <i className=" fa fa-home fa-2x"></i>
          <div className="disc">Deliverly</div>
        </Link>
        <Link to="profile" className="Link buttomNavLink">
          <i className=" fa fa-user fa-2x"></i>
          <div className="disc">Profile</div>
        </Link>
      </div>
    </div>
  );
};

export default ButtomNav;
