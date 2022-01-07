/** @format */
import { useState, useEffect } from "react";

const ItemFunc = ({ name, imgUrl, cost, rating }) => {
  let [qu, setQu] = useState(0);

  useEffect(() => {
      
  }, [qu]);

  const handleIncr = () => {
    setQu(qu + 1);
  };

  const handleDecr = () => {
    if (qu > 0) {
      setQu(qu - 1);
    }
  };

  const handleQuShiftClass = () => {
    return qu == 0 ? "Shift" : "";
  };

  const Item = () => {
    return (
      <div className="product-d">
        <div className={`quantity quantity${handleQuShiftClass()}`}>{qu}</div>
        <div>
          <img src={`image/${imgUrl}`} />
        </div>
        <div className="desc">{name}</div>
        <div className="rating">Rating: {rating}</div>

        <div className="cost">
          <i className="fa fa-tag fa-fw"></i> Cost: {cost}
        </div>
        <div className="counter-d">
          <div className="decrease" onClick={handleIncr}>
            <i className="fa fa-angle-left">+</i>
          </div>

          <div className="increase" onClick={handleDecr}>
            <i className="fa fa-angle-right">-</i>
          </div>
        </div>
      </div>
    );
  };
  return <Item />;
};

export default ItemFunc;
