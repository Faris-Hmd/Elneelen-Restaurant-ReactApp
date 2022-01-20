/** @format */

import React from "react";
import { Link } from "react-router-dom";


const HorizontalSlider = () => {
  return (
    <div className="horizontalCardContainer">
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

const Categories = () => {
  return (
    <div className="categories">
      <div className="category">
        <img src="./image/back 4.jpeg" alt="" />
        <div className="catygoryName"></div>
      </div>
      <div className="category">
        <img src="./image/back 4.jpeg" alt="" />
        <div className="catygoryName"></div>
      </div>
      <div className="category">
        <img src="./image/back 4.jpeg" alt="" />
        <div className="catygoryName"></div>
      </div>
      <div className="category">
        <img src="./image/back 4.jpeg" alt="" />
        <div className="catygoryName"></div>
      </div>
      <div className="category">
        <img src="./image/back 4.jpeg" alt="" />
        <div className="catygoryName">sandwich</div>
      </div>
      <div className="category">
        <img src="./image/back 4.jpeg" alt="" />
        <div className="catygoryName">pizzza</div>
      </div>
      <div className="category">
        <img src="./image/back 4.jpeg" alt="" />
        <div className="catygoryName">burger</div>
      </div>
      <div className="category">
        <img src="./image/logo192.png" alt="" />
        <div className="catygoryName">pizza</div>
      </div>
      <div className="category">
        <img src="./image/back 4.jpeg" alt="" />
        <div className="catygoryName">burger</div>
      </div>
    </div>
  );

}

const Home = () => {
  return (
    <div className="homeContainer">
        <div className="welcome">
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
      <div className="label">Offers </div>
      <HorizontalSlider />
      <Categories/>
      <div className="label">Top Paied </div>
      <HorizontalSlider />
    </div>
  );
};

export default Home;
