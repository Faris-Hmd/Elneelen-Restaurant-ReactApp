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
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import { useEffect } from "react/cjs/react.development";

const App = () => {
  const [products, setProducts] = useState();
  const [isLog, setIsLog] = useState(false);
  const [currentUser, setCurrentUser] = useState({ cart: [] });
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [qu, setQu] = useState(false);

  /*useEffect(() => {
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
        setUsers(data);
      });
    fetch("http://localhost:8000/categories")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCategories(data);
      });
  }, []);*/

  const handleIncr = (id) => {
    setUsers();
    setCategories()

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

  useEffect(
    (qu) => {
      if (currentUser.cart.length > 0) {
        setQu(true);
      } else {
        setQu(false);
      }
    },
    [currentUser]
  );

  return (
    <BrowserRouter>
      <div className="container">
        <ButtomNav isLog={isLog} qu={qu} />
        <TopNav />
        <Routes>
          <Route path="/" element={<Home categories={categories} />} />
          <Route
            path="/signin"
            element={
              <SignIn
                users={users}
                isLog={isLog}
                setIsLog={setIsLog}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="/signUp"
            element={
              <SignUp
                users={users}
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
                users={users}
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
              currentUser && (
                <CartList cart={currentUser.cart} users={users} isLog={isLog} />
              )
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
