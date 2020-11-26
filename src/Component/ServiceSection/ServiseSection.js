import React from "react";
import style from "./servises.module.scss";
import jsonselect from "./menu.json";
import { NavLink } from "react-router-dom";

export default function ServiceImageSelect(props) {
  const name = props.location.pathname;
  return (
    <div className={style.servis_block}>
      {jsonselect.map((item) => {
        return (
          <div key={item.name} className={style.servis_block_item}>
            <NavLink style={{ textDecoration: "none" }} exact to="/diagnostic">
              <div className={style.servis_image}>
                <img src={item.imagefilt} alt={item.imagefilt} />
              </div>
            </NavLink>
            <div className={style.servis_information}>
              <NavLink
                style={{ textDecoration: "none" }}
                exact
                to="/diagnostic"
              >
                <h2 className={style.servis_name_special}>{item.name} </h2>
              </NavLink>
              <ul className={style.servis_item_li}>
                {item.itemlist.map((name) => (
                  <li key={name} className={style.servis_item_select}>
                    {name}
                  </li>
                ))}
              </ul>
              {name !== "/services" && (
                <NavLink
                  style={{ textDecoration: "none" }}
                  exact
                  to="/services"
                >
                  <a className={style.servis_information_line_next}>
                    Всі послуги
                    <span className={style.servis_information_svg}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        data-svg="chevron-right"
                      >
                        <polyline
                          fill="none"
                          stroke="#000"
                          strokeWidth="1.03"
                          points="7 4 13 10 7 16"
                        ></polyline>
                      </svg>
                    </span>
                  </a>
                </NavLink>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
