/** @format */

import React from "react";
import { useParams } from "react-router-dom";
const ProductList = (props) => {
  const { category } = useParams();
  const products = props.products.filter(
    (product) => product.category === category
  );
  const isLog = props.isLog;

  const Product = (props) => {
    const handleQuShiftClass = () => {
      return props.qu === 0 ? "Shift" : "";
    };

    return (
      <div className="product">
        <div className={`quantity quantity${handleQuShiftClass()}`}>
          {props.qu}
        </div>
        <div>
          <img alt="kind" src={`/image/${props.imgUrl}`} />
        </div>
        <div className="desc">{props.name}</div>
        <div className="rating">Rating: {props.rating}</div>

        <div className="cost">
          <i className="fa fa-tag fa-fw"></i> {props.cost}
        </div>
        {isLog && (
          <div className="counter-d">
            <div className="decrease" onClick={props.handleDecr}>
              <i className="fa fa-angle-left"></i>
            </div>

            <div className="increase" onClick={props.handleIncr}>
              <i className="fa fa-angle-right"></i>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="productContainer">
      {products.map((item) => {
        const product = props.currentUser.cart.find(
          (product) => product.id === item.id
        );

        return (
          <Product
            key={item.id}
            name={item.name}
            id={item.id}
            cost={item.cost}
            rating={item.rating}
            imgUrl={item.imgUrl}
            qu={product ? product.qu : 0}
            handleDecr={() => props.handleDecr(item.id)}
            handleIncr={() => props.handleIncr(item.id, item)}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
