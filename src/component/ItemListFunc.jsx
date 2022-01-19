/** @format */

import React from "react";
import ItemFunc from "./ItemFunc";

const ItemListFunc = (props) => {
  let itemList = props.DB;
  return (
    <div className="productContainer">
      {itemList.map((item) => {
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
      })}
    </div>
  );
};

export default ItemListFunc;
