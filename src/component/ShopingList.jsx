/** @format */
import React, { Component } from "react";
import Item from "./Item";

class ShopingList extends Component {
  constructor(props) {
    super(props);
  }
  itemListArray = [
    {
      id: 1,
      name: "burger",
      cost: 1000,
      rating: `${4.5} /5`,
      imgUrl: "baked tilapia.jpg",
    },
    {
      id: 2,
      name: "pizza",
      cost: 1700,
      rating: 2.7,
      imgUrl: "bbq burger.jpeg",
    },
    {
      id: 3,
      name: "sandwish",
      cost: 1200,
      rating: `${4.2} /5`,
      imgUrl: "Braised Oxtail Burger .jpeg",
    },
    {
      id: 4,
      name: "sandwish",
      cost: 800,
      rating: `${3.2} /5`,
      imgUrl: "Black Bean Burgers .jpeg",
    },
    {
      id: 5,
      name: "sandwish",
      cost: 1200,
      rating: `${3.7} /5`,
      imgUrl: "Braised Oxtail Burger .jpeg",
    },
    {
      id: 6,
      name: "sandwish",
      cost: 800,
      rating: `${3.5} /5`,
      imgUrl: "Black Bean Burgers .jpeg",
    },
  ];
  ItemList = () => {
    return this.itemListArray.map((item) => {
      return (
        <Item
          key={item.id}
          name={item.name}
          cost={item.cost}
          rating={item.rating}
          imgUrl={item.imgUrl}
        />
      );
    });
  };
  render() {
    return <this.ItemList />;
  }
}

export default ShopingList;
