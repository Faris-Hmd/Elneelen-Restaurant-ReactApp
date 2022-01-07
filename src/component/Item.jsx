/** @format */

import React, { Component } from "react";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = { qu: 0 };
  }
  handleIncr = () => {
    this.setState({ qu: this.state.qu + 1 });
  };
  handleDecr = () => {
    if (this.state.qu > 0) {
      this.setState({ qu: this.state.qu - 1 });
    }
  };
  handleQu = () => {
    if (this.state.qu == 0) {
      return "quantityShift";
    }
  };

  Items = ({}) => {
    return (
      <div className="product-d">
        <div className={`quantity ${this.handleQu()}`}>{this.state.qu}</div>
        <div>
          <img src={`image/${this.props.imgUrl}`} />
        </div>
        <div className="desc">{this.props.name}</div>
        <div className="rating">Rating : {this.props.rating}</div>

        <div className="cost">
          <i className="fa fa-tag fa-fw"></i> Cost : {this.props.cost}
        </div>
        <div className="counter-d">
          <div className="decrease" onClick={this.handleIncr}>
            <i className="fa fa-angle-left">+</i>
          </div>

          <div className="increase" onClick={this.handleDecr}>
            <i className="fa fa-angle-right">-</i>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return <this.Items />;
  }
}

export default Item;
