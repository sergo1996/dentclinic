import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../services/routes";
import style from "./navigation.module.scss";
import myimg from "./logo_c.jpg";

const Navigation = () => (
  <ul className={style.navigationlist}>
    <li>
      <NavLink to={routes[0].path}>
        <img src={myimg} alt="woman shirt" />
      </NavLink>
    </li>
    {routes.map((name) => (
      <li>
        <NavLink
          exact={name.exact}
          to={name.path}
          className={style.navLi}
          activeClassName="Navigation-link-active"
        >
          {name.label}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default Navigation;
