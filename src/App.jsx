/** @format */

import React from "react";
import { useState } from "react";
import Home from "./component/Home";
import CartList from "./component/Cartlist";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ButtomNav from "./component/ButtomNav";
import ProductList from "./component/ProductList";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 0,
      name: "baked tilapia",
      cost: `${2000}$`,
      rating: `${4.9} /5`,
      imgUrl: "baked tilapia.jpg",
      qu: 1,
    },
    {
      id: 1,
      name: "bbq burger",
      cost: `${1300}$`,
      rating: `${2.5} /5`,
      imgUrl: "bbq burger.jpeg",
      qu: 2,
    },
    {
      id: 2,
      name: "Braised Oxtail Burger",
      cost: `${1450}$`,
      rating: `${4.2} /5`,
      imgUrl: "Braised Oxtail Burger .jpeg",
      qu: 0,
    },
    {
      id: 3,
      name: "Black Bean Burgers",
      cost: `${500}$`,
      rating: `${3.2} /5`,
      imgUrl: "Black Bean Burgers .jpeg",
      qu: 0,
    },
    {
      id: 4,
      name: "Braised Oxtail Burger",
      cost: `${800}$`,
      rating: `${3.7} /5`,
      imgUrl: "Braised Oxtail Burger .jpeg",
      qu: 0,
    },
    {
      id: 5,
      name: "Black Bean Burgersish",
      cost: `${700}$`,
      rating: `${3.5} /5`,
      imgUrl: "Black Bean Burgers .jpeg",
      qu: 0,
    },
    {
      id: 6,
      name: "baked tilapia",
      cost: `${1000}$`,
      rating: `${4.5} /5`,
      imgUrl: "baked tilapia.jpg",
      qu: 0,
    },
  ]);
  const DB = {
    products: [],
    categories: [
      {
        id: 1,
        name: "burger",
        imgUrl: "baked tilapia.jpg",
        path: `cart`,
      },
      {
        id: 2,
        name: "Cold drink",
        imgUrl: "Black Bean Burgers .jpeg",
        path: "menu",
      },
      {
        id: 3,
        name: "Sandwich",
        imgUrl: "",
        path: "",
      },
      {
        id: 4,
        name: "Icecream",
        imgUrl: "",
        path: "",
      },
      {
        id: 5,
        name: "Pizza",
        imgUrl: "",
        path: "",
      },
      {
        id: 6,
        name: "Hot Drik",
        imgUrl: "",
        path: "",
      },
      {
        id: 7,
        name: "burger",
        imgUrl: "",
        path: "",
      },
      {
        id: 8,
        name: "burger",
        imgUrl: "",
        path: "",
      },
      {
        id: 9,
        name: "burger",
        imgUrl: "",
        path: "",
      },
    ],
  };

  const handleIncr = (id) => {
    setProducts(
      products.map((item) =>
        item.id === id ? { ...item, qu: item.qu + 1 } : { ...item }
      )
    );
  };

  const handleDecr = (id) => {
    if (products[id].qu === 0) return;
    setProducts(
      products.map((item) =>
        item.id === id ? { ...item, qu: item.qu - 1 } : { ...item }
      )
    );
  };

  const quantity = () => {
    let qu = 0;
    products.map((item) => {
      if (item.qu > 0) {
        qu = qu + 1;
      }
      return null;
    });
    return qu;
  };

  return (
    <BrowserRouter>
      <div className="container">
        <ButtomNav quantity={quantity} />
        <Routes>
          <Route path="/" element={<Home DB={DB} />} />
          <Route
            path="/menu"
            element={
              <ProductList
                products={products}
                handleIncr={handleIncr}
                handleDecr={handleDecr}
              />
            }
          />
          <Route path="/cart" element={<CartList products={products} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
