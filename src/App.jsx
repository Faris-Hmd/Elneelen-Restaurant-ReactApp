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
import { useEffect } from "react/cjs/react.development";

const App = () => {
  const [products, setProducts] = useState();
  const [isLog, setIsLog] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [user, setUser] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      });
    fetch("http://localhost:8000/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUser(data);
      });
    fetch("http://localhost:8000/categories")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const handleIncr = (id) => {
    setUser();

    setCurrentUser(
      currentUser.cart.map((item) =>
        item.id === id ? { ...item, qu: item.qu + 1 } : { ...item }
      )
    );
  };

  const handleDecr = (id) => {
    if (currentUser.cart[id].qu === 0) return;
    setProducts(
      currentUser.cart.map((item) =>
        item.id === id ? { ...item, qu: item.qu - 1 } : { ...item }
      )
    );
  };

  /* const quantity = () => {
    let qu = 0;
    currentUser.cart.map((item) => {
      if (item.qu > 0) {
        qu = qu + 1;
      }
      return null;
    });
    return qu;
  };*/

  return (
    <BrowserRouter>
      <div className="container">
        <ButtomNav /*quantity={quantity} */ />
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
              <CartList cart={currentUser.cart} user={user} isLog={isLog} />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
