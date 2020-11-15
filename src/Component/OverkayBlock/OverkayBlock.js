import React, { Component } from "react";
import "./styleOverlay.css";

class OverkayBlock extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeydown);
  }

  handleKeydown = (e) => {
    if (e.code === "Escape") {
      this.props.closeModal();
    }
  };
  render() {
    return (
      <div className="Overlay" onClick={this.props.closeModal}>
        <div className="Modal">
          <button className="button_svg">
            {" "}
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              xmlns="http://www.w3.org/2000/svg"
              data-svg="close-icon"
            >
              <line
                fill="none"
                stroke="#000"
                stroke-width="1.1"
                x1="1"
                y1="1"
                x2="13"
                y2="13"
              ></line>
              <line
                fill="none"
                stroke="#000"
                stroke-width="1.1"
                x1="13"
                y1="1"
                x2="1"
                y2="13"
              ></line>
            </svg>{" "}
          </button>
          <h2 className="text_title_midl"> Контакти</h2>
          <p>Місцезнаходження: вул. буд.</p>
          <a href="http://geo.lutskrada.gov.ua/ua/map/main#map=18//50.752599//25.3266793&&layer=12047211593411934-1,100">
            Посилання на місцезнаходження
          </a>
          <p>Номер телефону:</p>
        </div>
      </div>
    );
  }
}

export default OverkayBlock;
