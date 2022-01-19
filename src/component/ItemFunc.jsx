/** @format */
const ItemFunc = (props) => {
  const handleQuShiftClass = () => {
    return props.qu === 0 ? "Shift" : "";
  };

  return (
    <div className="product">
      <div className={`quantity quantity${handleQuShiftClass()}`}>
        {props.qu}
      </div>
      <div>
        <img alt="kind" src={`image/${props.imgUrl}`} />
      </div>
      <div className="desc">{props.name}</div>
      <div className="rating">Rating: {props.rating}</div>

      <div className="cost">
        <i className="fa fa-tag fa-fw"></i> {props.cost}
      </div>
      <div className="counter-d">
        <div className="decrease" onClick={props.handleDecr}>
          <i className="fa fa-angle-left"></i>
        </div>

        <div className="increase" onClick={props.handleIncr}>
          <i className="fa fa-angle-right"></i>
        </div>
      </div>
    </div>
  );
};

  export default ItemFunc;
