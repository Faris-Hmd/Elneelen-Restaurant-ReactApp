/** @format */

import React from "react";
import { useState, useEffect} from "react";
import Home from "./component/Home";
import CartList from "./component/Cartlist";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ButtomNav from "./component/ButtomNav";
import ProductList from "./component/ProductList";
import Settings from "./component/Settings";
import TopNav from "./component/TopNav";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import axios from "axios";

const App = () => {
  const baseURL = "http://localhost:8000";
  const [products, setProducts] = useState([
    {
      id: 0,
      name: "baked tilapia",
      cost: 2000,
      rating: "4.9 /5",
      imgUrl: "baked tilapia.jpg",
      category: "burger",
    },
    {
      id: 1,
      name: "bbq burger",
      cost: 2000,
      rating: "3.5 / 5",
      imgUrl: "bbq burger.jpeg",
      category: "burger",
    },
    {
      id: 2,
      name: "Braised Oxtail Burger",
      cost: 1000,
      rating: "4.9 /5",
      imgUrl: "Braised Oxtail Burger .jpeg",
      category: "burger",
    },
    {
      id: 3,
      name: "baked tilapias",
      cost: 2000,
      rating: "4.9 /5",
      imgUrl: "baked tilapia.jpg",
      category: "burger",
    },
    {
      id: 4,
      name: "bbq burger",
      cost: 900,
      rating: "3.5 / 5",
      imgUrl: "bbq burger.jpeg",
      category: "pizza",
    },
    {
      id: 5,
      name: "Braised Oxtail Burger",
      cost: 1450,
      rating: "4.9 /5",
      imgUrl: "Braised Oxtail Burger .jpeg",
    },
  ]);
  const [isLog, setIsLog] = useState(false);
  const [currentUser, setCurrentUser] = useState({ cart: [] });
  const [users, setUsers] = useState([
    {
      userName: "faris",
      passWord: "faris",
      id: 1,
      cart: [
        {
          id: 0,
          name: "baked tilapia",
          cost: 2000,
          rating: "4.9 /5",
          imgUrl: "baked tilapia.jpg",
          category: "burger",
          qu: 14,
        },
        {
          id: 1,
          name: "bbq burger",
          cost: 2000,
          rating: "3.5 / 5",
          imgUrl: "bbq burger.jpeg",
          category: "burger",
          qu: 3,
        },
      ],
    },
  ]);
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "burger",
      imgUrl: "burger-svgrepo-com.svg",
      path: "burger",
    },
    {
      id: 2,
      name: "Pizza",
      imgUrl: "pizza-svgrepo-com.svg",
      path: "pizza",
    },
    {
      id: 3,
      name: "Sandwich",
      imgUrl: "hot-dog-svgrepo-com.svg",
      path: "",
    },
    {
      id: 4,
      name: "Hot Drinks",
      imgUrl: "coffee-cup-svgrepo-com.svg",
      path: "",
    },
    {
      id: 5,
      name: "Cold drinks",
      imgUrl: "smoothie-svgrepo-com.svg",
      path: "pizza",
    },
    {
      id: 6,
      name: "Icecreams",
      imgUrl: "ice-cream-svgrepo-com.svg",
      path: "",
    },
    {
      id: 7,
      name: "Sweats",
      imgUrl: "doughnut-svgrepo-com.svg",
      path: "pizza",
    },
    {
      id: 8,
      name: "Salad",
      imgUrl: "salad-svgrepo-com.svg",
      path: "pizza",
    },
    {
      id: 9,
      name: "Meats",
      imgUrl: "chicken-leg-svgrepo-com.svg",
      path: "",
    },
  ]);
  const [qu, setQu] = useState(false);

  useEffect(() => {
    axios.get(`${baseURL}/products`).then((res) => {
      setProducts(res.data);
    });
    axios.get(`${baseURL}/usersdata`).then((res) => {
      setUsers(res.data);
    });
    axios.get(`${baseURL}/categories`).then((res) => {
      setCategories(res.data);
    });
  }, []);
  //////////////////// HANDLE INCREMENT //////////////
  const handleIncr = (productId, product) => {
    setCategories();
    setQu();
    axios.get(`${baseURL}/usersdata/${currentUser.id}`).then((res) => {
      setCurrentUser(res.data);
    });
    //////// check if the product is already is in the cart or add it /////
    const checkProduct = currentUser.cart.find(
      (product) => product.id === productId
    );
    if (!checkProduct) {
      currentUser.cart.push({ ...product, qu: 0 });
      console.log(currentUser.cart);
      axios
        .put(`${baseURL}/usersdata/${currentUser.id}`, currentUser)
        .then(setCurrentUser(currentUser))
        .catch((error) => {
          console.log(error);
        });
    }

    ///////// increment ////////

    const cartItem = currentUser.cart.map((item) =>
      item.id === productId ? { ...item, qu: item.qu + 1 } : { ...item }
    );
    currentUser.cart = cartItem; /// update the cart with the new quantites

    axios
      .put(`${baseURL}/usersdata/${currentUser.id}`, currentUser)
      .then((res) => {
        setCurrentUser(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
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
                setUsers={setUsers}
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
                setUsers={setUsers}
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
                currentUser={currentUser}
                isLog={isLog}
                handleIncr={handleIncr}
                handleDecr={handleDecr}
              />
            }
          />
          <Route
            path="/settings"
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
                <CartList
                  cart={currentUser.cart}
                  currentUser={currentUser}
                  users={users}
                  setCurrentUser={setCurrentUser}
                  isLog={isLog}
                />
              )
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
