import React from "react";
import style from "./promotion.module.scss";
import promselect from "./Promotiob";
import { NavLink, Route } from "react-router-dom";
import freeRews from "../../Component/Freereview/Freereview";

const Reviews = ({ match }) => (
  <div className={style.promotions_cover_block}>
    <h1 className={style.promotions_title}>КОНТАКТИ</h1>
    {promselect.map((item) => {
      return (
        <div className={style.promotions_container_list}>
          <div>
            <img src={item.image} alt={item.name} />
          </div>

          <div>
            <h2 className={style.promotions_container_list_information_text}>
              {item.name}
            </h2>
            <div className={style.promotions_container_list_information}>
              <p className={style.promotions_container_list_link}>
                Акція діє до 31.12.2022
              </p>
              <NavLink
                to={{
                  pathname: match.url + item.rew,
                }}
              >
                <a>
                  Докладніше
                  <span className={style.promotions_container_list_svg}>
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
                        stroke-width="1.03"
                        points="7 4 13 10 7 16"
                      ></polyline>
                    </svg>
                  </span>
                </a>
              </NavLink>
            </div>
          </div>
          <Route exact path={`${match.path}${item.rew}`} component={freeRews} />
        </div>
      );
    })}
    <div></div>
  </div>
);

export default Reviews;
