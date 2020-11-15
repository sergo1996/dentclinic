import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../services/routes";
import style from "./navigation.module.scss";

const Navigation = () => (
  <ul className={style.navigationlist}>
    {routes.map(
      (name) =>
        name.label && (
          <li key={name.path}>
            <NavLink
              exact={name.exact}
              to={name.path}
              className={style.navLi}
              activeClassName="Navigation-link-active"
            >
              {name.image && (
                <img class="fit-picture" src={name.image} alt="first"></img>
              )}
              {name.label}
            </NavLink>
          </li>
        )
    )}
  </ul>
);

export default Navigation;
