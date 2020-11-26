import React, { Component } from "react";
import jsonselect from "./comand.json";
import { NavLink } from "react-router-dom";

const withHigherOrderComponent = (WrappedComponent) => {
  return class WithHigherOrderComponent extends Component {
    render() {
      console.log(this.props);
      const { style } = this.props;
      return (
        <div>
          <div className={style.section_back_color}>
            {this.props.renderBlock ? (
              <div>
                <div className={style.section_title}>
                  <h2 className={style.section_title_name}>Наша команда</h2>
                  <div className={style.section_block_svg}>
                    <NavLink style={{ textDecoration: "none" }} to="/doctors">
                      <a className={style.section_title_button}>Всі лікарі</a>
                    </NavLink>
                    <span className={style.section_title_svg}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        data-svg="arrow-right"
                      >
                        <polyline
                          fill="none"
                          stroke="#000"
                          points="10 5 15 9.5 10 14"
                        ></polyline>
                        <line
                          fill="none"
                          stroke="#000"
                          x1="4"
                          y1="9.5"
                          x2="15"
                          y2="9.5"
                        ></line>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ) : null}

            <div className={style.section_comand_lis}>
              {jsonselect.map((item) => {
                return (
                  <div
                    // onClick={() => this.nameselectId(item)}
                    key={item.id}
                    className={style.comand_item}
                  >
                    <NavLink
                      style={{ textDecoration: "none" }}
                      to={{
                        pathname: "/doctors" + item.name,
                        state: { from: item },
                      }}
                    >
                      <img
                        height="350px"
                        width="277px"
                        src={item.image}
                        alt="альтернативный текст"
                      />

                      <div className={style.transition_slider}>
                        <div className={style.block_button}>
                          <h2 className={style.item_name}>
                            {" "}
                            {item.nameSelect}
                          </h2>
                          <span className={style.comand_item_position}>
                            {item.specialty}
                          </span>
                          <a className={style.comand_item_more}>
                            {item.viuveProfil}
                          </a>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                );
              })}
            </div>
          </div>

          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
};

export default withHigherOrderComponent;
