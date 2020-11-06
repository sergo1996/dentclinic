import React from "react";
import itemList from "./itemList";
const Price = () => (
  <div>
    <ul>
      {itemList.map((item) => (
        <h1 key={item.name}>{item.name} </h1>
      ))}
    </ul>
  </div>
);

export default Price;
