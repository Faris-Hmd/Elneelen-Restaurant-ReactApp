/** @format */

import React, { PureComponent } from "react";
import LoginControl from "./component/LoginControl";
import ShopingList from "./component/ShopingList";
import "./component/App.css";
import "./component/product-d.css";
import "./component/colors.css";
class App extends React.Component {
  render() {
    return (
      <div className="contener-d">
        <ShopingList />
      </div>
    );
  }
}

export default App;
