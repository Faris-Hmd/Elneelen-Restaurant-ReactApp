/** @format */

import React, { PureComponent } from "react";
import LoginControl from "./component/LoginControl";
import ShopingList from "./component/ShopingList";
import ItemFunc from "./component/ItemFunc";
import "./css/App.css"
import "./css/product-d.css";
import "./css/colors.css";
import ItemListFunc from "./component/ItemListFunc";
class App extends React.Component {
  render() {
    return (
      <div className="contener-d">
        <ItemListFunc />
      </div>
    );
  }
}

export default App;
