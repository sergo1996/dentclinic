import React from "react";
import "./style.css";
import itemList from "./itemList";
import PriceComponent from "../../Component/Price/PriceComponent";

export default class Price extends React.Component {
  render() {
    return (
      <div className="prices_block_cover">
        <ul className="prices_block_items">
          <PriceComponent itemList={itemList} />
        </ul>
      </div>
    );
  }
}
