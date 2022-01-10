/** @format */

import React from "react";
import { useState } from "react";
im
import ItemListFunc from "./component/ItemListFunc";

const App = () => {
  const [DB, setDB] = useState([
    {
      id: 0,
      name: "baked tilapia",
      cost: `${2000}$`,
      rating: `${4.5} /5`,
      imgUrl: "baked tilapia.jpg",
      qu: 90,
    },
    {
      id: 1,
      name: "bbq burger",
      cost: `${1300}$`,
      rating: `${2.5} /5`,
      imgUrl: "bbq burger.jpeg",
      qu: 0,
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
  const handleIncr = (id) => {
    setDB(
      DB.map((item) =>
        item.id === id ? { ...item, qu: item.qu + 1 } : { ...item }
      )
    );
  };

  const handleDecr = (id) => {
    if (DB[id].qu === 0) return;
    setDB(
      DB.map((item) =>
        item.id === id ? { ...item, qu: item.qu - 1 } : { ...item }
      )
    );
  };

  return (
    <div className="contener-d">
      <ItemListFunc handleIncr={handleIncr} handleDecr={handleDecr} DB={DB} />
    </div>
  );
};

export default App;
