import React from "react";
import image from "../../image/miniImg/1.png";

function HomeItems() {
  return (
    <div className="servise">
      <h2 className="servise_description">dsf</h2>
      <ul className="servise_list">
        <li className="servise_list_item">
          <div className="servise_list_imageCover">
            <img
              //src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg"
              src={image}
              alt="Canvas Logo"
            />
          </div>
          <div className="servise_list_block_item">
            <h2> fsd</h2>
            <ul>
              <li>ds</li>
              <li>dsad</li>
              <li>dsadas</li>
            </ul>
          </div>
        </li>
        <li className="servise_list_item">
          <div className="servise_list_imageCover"></div>
          <div className="servise_list_block_item"></div>
        </li>
        <li className="servise_list_item">
          <div className="servise_list_imageCover"></div>
          <div className="servise_list_block_item"></div>
        </li>
        <li className="servise_list_item">
          <div className="servise_list_imageCover"></div>
          <div className="servise_list_block_item"></div>
        </li>
        <li className="servise_list_item">
          <div className="servise_list_imageCover"></div>
          <div className="servise_list_block_item"></div>
        </li>
        <li className="servise_list_item">
          <div className="servise_list_imageCover"></div>
          <div className="servise_list_block_item"></div>
        </li>
      </ul>
    </div>
  );
}

export default HomeItems;
