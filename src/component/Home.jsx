/** @format */

import React from "react";

import { Link } from "react-router-dom";
///////////////// CATEGORIES COMPONENT ////////////////
const Categories = (props) => {
  const categories = props.categories;
  const Category = (props) => {
    return (
      <div className="category">
        <Link to={`/menu/${props.path}`} className="Link">
          <div className="imgContainer">
            <img src={`./image/${props.imgUrl}`} alt="Category" />
          </div>
          <div className="catygoryName">{props.name}</div>
        </Link>
      </div>
    );
  };

  return (
    <div className="categories">
      {categories.map((cat) => {
        return (
          <Category
            key={cat.id}
            name={cat.name}
            imgUrl={cat.imgUrl}
            path={cat.path}
          />
        );
      })}
    </div>
  );
};

///////////////// SLIDER COMPONENT ////////////////
const HorizontalSlider = () => {
  return (
    <div className="horizontalCardContainer">
      <div className="card">
        <img src="./image/chicken-leg-svgrepo-com.svg" alt="" />
      </div>
      <div className="card">
        <img src="./image/3559503.jpg" alt="" />
      </div>
      <div className="card">
        <img src="./image/3559503.jpg" alt="" />
      </div>
      <div className="card">
        <img src="./image/3559503.jpg" alt="" />
      </div>
    </div>
  );
};

///////////////// HOME COMPONENT ////////////////
const Home = (props) => {
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
            Burgers, pizza, Sandwich, Ice cream, Hot Drinks, Cold Drinks, Public
            Meals, Fish, Meats...etc
          </h4>
          <a href="#category">
            <div className="btn-order">Order Now</div>
          </a>
        </div>
      </div>
      <div className="label">Offers </div>
      <HorizontalSlider />
      <div id="category" className="label">
        Categories
      </div>
      <Categories categories={props.categories} />
      <div className="label">Top Paid </div>
      <HorizontalSlider />
    </div>
  );
};

export default Home;
