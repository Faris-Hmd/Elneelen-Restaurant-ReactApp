/** @format */

import React from "react";
import { useState } from "react";
import Home from "./component/Home";
import CartList from "./component/Cartlist";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ButtomNav from "./component/ButtomNav";
import ProductList from "./component/ProductList";
import Settings from "./component/Settings";
import TopNav from "./component/TopNav";
import Forms from "./component/Forms";

const App = () => {
  const [isLog, setIsLog] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [user, setUser] = useState([
    {
      name: "faris",
      password: "faris",
      cart: [{ id: 1, qu: 1 }],
    },

    {
      name: "hmd",
      password: "hmd",
      cart: [
        { id: 1, qu: 1 },
        { id: 2, qu: 2 },
      ],
    },
  ]);

  const [products, setProducts] = useState([
    {
      id: 0,
      name: "baked tilapia",
      cost: `${2000}$`,
      rating: `${4.9} /5`,
      imgUrl: "baked tilapia.jpg",
      category: "pizza",
      qu: 1,
    },
    {
      id: 1,
      name: "bbq burger",
      cost: `${1300}$`,
      rating: `${2.5} /5`,
      imgUrl: "bbq burger.jpeg",
      category: "pizza",
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
      category: "burger",
      qu: 0,
    },
    {
      id: 4,
      name: "Braised Oxtail Burger",
      cost: `${800}$`,
      rating: `${3.7} /5`,
      imgUrl: "Braised Oxtail Burger .jpeg",
      category: "burger",
      qu: 0,
    },
    {
      id: 5,
      name: "Black Bean Burgersish",
      cost: `${700}$`,
      rating: `${3.5} /5`,
      imgUrl: "Black Bean Burgers .jpeg",
      category: "burger",
      qu: 0,
    },
    {
      id: 6,
      name: "baked tilapia",
      cost: `${1000}$`,
      rating: `${4.5} /5`,
      imgUrl: "baked tilapia.jpg",
      category: "burger",
      qu: 0,
    },
  ]);

  const categories = [
    {
      id: 1,
      name: "burger",
      imgUrl: "burgerCate.png",
      path: `burger`,
    },
    {
      id: 2,
      name: "Cold drink",
      imgUrl: "Black Bean Burgers .jpeg",
      path: "pizza",
    },
    {
      id: 3,
      name: "Pizza",
      imgUrl: "pizzaCate.png",
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
  ];

  const handleIncr = (id) => {
    setUser();
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
        <TopNav />
        <Routes>
          <Route path="/" element={<Home categories={categories} />} />
          <Route
            path="/signin"
            element={
              <Forms
                user={user}
                isLog={isLog}
                setIsLog={setIsLog}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="/menu/:category"
            element={
              <ProductList
                products={products}
                handleIncr={handleIncr}
                handleDecr={handleDecr}
              />
            }
          />
          <Route
            path={`/settings`}
            element={
              <Settings
                user={user}
                isLog={isLog}
                setIsLog={setIsLog}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartList
                products={products}
                user={user}
                isLog={isLog}
                setIsLog={setIsLog}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
