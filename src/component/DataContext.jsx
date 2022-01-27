/** @format */

import axios from "axios";
import React, { createContext } from "react";
import { useState, useEffect } from "react";
import TopNav from "./TopNav";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const baseURL = "http://localhost:8000";
  const [products, setProducts] = useState();
  const [isLog, setIsLog] = useState(false);
  const [currentUser, setCurrentUser] = useState({ cart: [] });
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);
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
  return (
    <DataContext.Provider value={"from dataprovider"}>
      <TopNav />
    </DataContext.Provider>
  );
};
