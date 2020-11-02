import { lazy } from "react";

const routes = [
  {
    path: "/",
    label: "",
    exact: true,
    component: lazy(() =>
      import("../views/Home/Home.js" /* webpackChunkName: "home-page" */)
    ),
  },
  {
    path: "/services",
    label: "Послуги",
    exact: true,
    component: lazy(() =>
      import(
        "../views/Services/Services.js" /* webpackChunkName: "register-page"*/
      )
    ),
  },
  {
    path: "/doctors",
    label: "Лікарі",
    exact: true,
    component: lazy(() =>
      import("../views/Doctors/Doctors.js" /* webpackChunkName: "login-page"*/)
    ),
  },
  {
    path: "/photo",
    label: "Фото робіт",
    exact: true,
    component: lazy(() =>
      import("../views/Photo/Photo.js" /* webpackChunkName: "login-page"*/)
    ),
  },
  {
    path: "/price",
    label: "Ціни",
    exact: true,
    component: lazy(() =>
      import("../views/Price/Price.js" /* webpackChunkName: "messages-page" */)
    ),
  },
  {
    path: "/promotions",
    label: "Акції",
    exact: true,
    component: lazy(() =>
      import(
        "../views/Promotions/Promotions.js" /* webpackChunkName: "settings-page" */
      )
    ),
  },
  {
    path: "/contacts",
    label: "Контакти",
    exact: true,
    component: lazy(() =>
      import(
        "../views/Contacts/Contacts.js" /* webpackChunkName: "settings-page" */
      )
    ),
  },
  {
    path: "/reviews",
    label: "Відгуки",
    exact: true,
    component: lazy(() =>
      import(
        "../views/Reviews/Reviews.js" /* webpackChunkName: "settings-page" */
      )
    ),
  },
];

export default routes;
