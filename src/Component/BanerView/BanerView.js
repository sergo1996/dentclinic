import React, { Component } from "react";
import "./home.css";
import { NavLink } from "react-router-dom";
import OverkayBlock from "../OverkayBlock/OverkayBlock";

class BlockImageSelect extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };
  render() {
    return (
      <div>
        {this.state.isModalOpen && (
          <OverkayBlock closeModal={this.toggleModal} />
        )}
        <div className="slider">
          <div className="slider-part">
            <h2 className="slider_description">
              ЛІКУЄМО СВОЇХ ПАЦІЄНТІВ ТАК, <br />
              ЯК МИ ХОТІЛИ Б ЛІКУВАТИСЯ САМІ
            </h2>

            <div className="slider-partn-end">
              <NavLink
                exact
                to="/about"
                // className={style.navLi}
                activeClassName="Navigation-link-active"
              >
                <button className="cklickbutton">Про клініку</button>
              </NavLink>

              <button onClick={this.toggleModal} className="cklickbutton">
                Записатись на прийом
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlockImageSelect;
