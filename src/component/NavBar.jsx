/** @format */
import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <>
      <header>
        <div className="nav-bar">
          <ul>
            <li id="side-close-btn">
              <i className="fa fa-bars fa-2x"></i>
            </li>
            <Link to="/" className="Link">
              <li>
                <i className="fa fa-home fa-2x"></i>
              </li>
            </Link>
            <li>
              <i className="fa fa-adjust fa-2x"></i>
            </li>
            <li>
              <i className="fa fa-search fa-2x"></i>
            </li>
            <li>
              <Link to="/cart" className="Link">
                <i className="fa fa-shopping-cart fa-2x"></i>
                <span
                  className={`cartQu ${
                    props.quantity() === 0 ? "hideCartQu" : ""
                  }`}
                >
                  {props.quantity()}
                </span>
              </Link>
            </li>
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
