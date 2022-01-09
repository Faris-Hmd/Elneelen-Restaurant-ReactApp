/** @format */

import React from "react";
import ItemFunc from "./ItemFunc";

const ItemListFunc = (props) => {
  let itemList = props.DB;
  return itemList.map((item) => {
    return (
      <ItemFunc
        key={item.id}
        name={item.name}
        id={item.id}
        cost={item.cost}
        rating={item.rating}
        imgUrl={item.imgUrl}
        qu={item.qu}
        handleDecr={() => props.handleDecr(item.id)}
        handleIncr={() => props.handleIncr(item.id)}
      />
    );
  });
};

export default ItemListFunc;
