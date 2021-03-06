/** @format */
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const CartList = (props) => {
  const currenUser = props.currentUser;
  const setCurrentUser = props.setCurrentUser;
  useEffect(() => {
    axios
      .get(`http://localhost:8000/usersdata/${currenUser.id}`)
      .then((res) => {
        setCurrentUser(res.data);
      });
  }, []);
  const cart = props.cart;
  const CartItem = (props) => {
    return (
      <div className={`cartItemContainer  `}>
        <img src={`./image/${props.imgUrl}`} alt="cartItem" />
        <div className="cartItemInfo">
          <div className="itemName">{props.name}</div>
          <div className="itemCost">{props.cost}</div>
        </div>
        <div className="cartItemQuContainer">
          <div className="cartItemQu">{props.qu}</div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={`cart ${props.isLog ? "" : "hide"} `}>
        {cart.map((item) => {
          return (
            <CartItem
              key={item.id}
              name={item.name}
              cost={item.cost}
              qu={item.qu}
              imgUrl={item.imgUrl}
            />
          );
        })}
      </div>
    </>
  );
};

export default CartList;
