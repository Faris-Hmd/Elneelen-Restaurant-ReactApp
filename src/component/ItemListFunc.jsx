/** @format */

import React from "react";
import ItemFunc from "./ItemFunc";

let itemListArray = [
  {
    id: 1,
    name: "baked tilapia",
    cost: `${2000}$`,
    rating: `${4.5} /5`,
    imgUrl: "baked tilapia.jpg",
  },
  {
    id: 2,
    name: "bbq burger",
    cost: `${1300}$`,
    rating: `${2.5} /5`,
    imgUrl: "bbq burger.jpeg",
  },
  {
    id: 3,
    name: "Braised Oxtail Burger",
    cost: `${1450}$`,
    rating: `${4.2} /5`,
    imgUrl: "Braised Oxtail Burger .jpeg",
  },
  {
    id: 4,
    name: "Black Bean Burgers",
    cost: `${500}$`,
    rating: `${3.2} /5`,
    imgUrl: "Black Bean Burgers .jpeg",
  },
  {
    id: 5,
    name: "Braised Oxtail Burger",
    cost: `${800}$`,
    rating: `${3.7} /5`,
    imgUrl: "Braised Oxtail Burger .jpeg",
  },
  {
    id: 6,
    name: "Black Bean Burgersish",
    cost: `${700}$`,
    rating: `${3.5} /5`,
    imgUrl: "Black Bean Burgers .jpeg",
  },
  {
    id: 7,
    name: "baked tilapia",
    cost: `${1000}$`,
    rating: `${4.5} /5`,
    imgUrl: "baked tilapia.jpg",
  },
];
itemListArray.push({
  id: 8,
  name: "bbq burger",
  imgUrl: "bbq burger.jpeg",
  rating: `${4.0} / 5`,
  cost: `${2050}$`,
});
const ItemListFunc = () => {
  return itemListArray.map(({ id, name, imgUrl, cost, rating }) => {
    return (
      <ItemFunc
        key={id}
        name={name}
        cost={cost}
        rating={rating}
        imgUrl={imgUrl}
      />
    );
  });
};

export default ItemListFunc;
