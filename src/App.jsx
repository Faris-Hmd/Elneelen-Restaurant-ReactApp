/** @format */

import React, { PureComponent } from "react";
import LoginControl from "./component/LoginControl";
import ShopingList from "./component/ShopingList";
import ItemFunc from "./component/ItemFunc";
import "./component/App.css";
import "./component/product-d.css";
import "./component/colors.css";
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
