/** @format */

import React from "react";
import { Link } from "react-router-dom";

const VerticalSlider = () => {
  return (
    <div className="verticalCardContainer">
      <div className="card">
        <img src="./image/steak burger.jpeg" alt="" />
      </div>
      <div className="card">
        <img src="./image/back 4.jpeg" alt="" />
      </div>
      <div className="card">
        <img src="./image/back 4.jpeg" alt="" />
      </div>
      <div className="card">
        <img src="./image/back 4.jpeg" alt="" />
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="sidesCon">
        <div className="sideOne">
          <div className="nav-bar">
            <div className="nav-con">About Us</div>
            <div className="nav-con">Contact</div>
            <div className="nav-con">Servies</div>
            <div className="nav-con">Home</div>
            <span></span>
          </div>
          <div className="txt">
            <h2>Welcome In</h2>
            <h1>ElNeelen Restaurant</h1>
            <h4>
              Burger, pizza, Sandwich, Ice cream, Hot Drinks, Cold Drinks,
              Public Meals, Fish, Meats...etc
            </h4>
            <Link className="Link" to="/menu">
              <div className="btn-order">Order Now</div>
            </Link>
          </div>
        </div>
        <div className="sideTwo">
          <form id="signIn">
            <i className="fa fa-user fa-2x"></i>
            <input type="text" placeholder="Username" />
            <br />
            <i className="fa fa-lock fa-2x"></i>
            <input type="password" placeholder="Password" />
            <input type="submit" value="Log in" />
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
      </div>
      <div className="label">Offers </div>
      <VerticalSlider />
      <div className="label">Top Paied </div>
      <VerticalSlider />
    </div>
  );
};

export default Home;
