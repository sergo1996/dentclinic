import React, { Component } from "react";
import "./styleOverlay.css";

class OverkayBlock extends Component {
  // state = {
  //   name: "",
  //   number: "",
  // };

  // handleChange = (e) => {
  //   const { name, value } = e.target;
  //   this.setState({ [name]: value });
  // };
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeydown);
  }

  handleKeydown = (e) => {
    if (e.code === "Escape" || e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };
  render() {
    // const { name, number } = this.state;
    return (
      <div className="Overlay" onClick={this.handleKeydown}>
        <div className="Modal">
          <form className="contactForm">
            <label>
              Name
              <input
                className="contactFormItem"
                type="text"
                id="name"
                name="name"
                // value={name}
              />
            </label>
            <label>
              Phone
              <input
                className="contactFormItem"
                type="text"
                id="phone"
                name="number"
                // value={number}
              />
            </label>

            <button className="contactBtn">Add contact</button>
          </form>
        </div>
      </div>
    );
  }
}

export default OverkayBlock;
