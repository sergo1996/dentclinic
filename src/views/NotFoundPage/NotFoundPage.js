import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => (
  <div>
    <h1>404</h1>
    <p>
      Страница не найдена! Перейти на главную страницу можно по{" "}
      <NavLink
        exact="true"
        to="/dentclinic"
        activeClassName="Navigation-link-active"
      >
        посиланюю
      </NavLink>
    </p>
  </div>
);

export default NotFound;
