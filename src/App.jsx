/** @format */

import React  from "react";

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
