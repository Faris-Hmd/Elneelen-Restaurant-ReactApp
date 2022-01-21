/** @format */

import Forms from "./Forms";

const CartList = (props) => {
  const cart = props.products.filter((item) => item.qu !== 0);

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
      <div className={`${props.isLog ? "hide" : ""}`}>
        <Forms
          handleSetCurrentUser={props.handleSetCurrentUser}
          user={props.user}
          setIsLog={props.setIsLog}
        />
      </div>
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
