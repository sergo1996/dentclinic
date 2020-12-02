import { lazy } from "react";

const routes = [
  {
    path: "/dentclinic",
    label: " ",
    exact: true,
    image: "https://i.ibb.co/rc3jfYz/logo-c.jpg",
    component: lazy(() =>
      import("../views/Home/Home.js" /* webpackChunkName: "dentclinic-page" */)
    ),
  },
  {
    path: "/services",
    label: "Послуги",
    exact: true,
    component: lazy(() =>
      import(
        "../views/Services/Services.js" /* webpackChunkName: "services-page"*/
      )
    ),
  },
  {
    path: "/services/:id",
    exact: true,
    component: lazy(() =>
      import(
        "../Component/BlockService/Diagnostic/Diagnostic" /* webpackChunkName: "services-item"*/
      )
    ),
  },
  {
    path: "/doctors",
    label: "Лікарі",
    exact: true,
    component: lazy(() =>
      import(
        "../views/Doctors/Doctors.js" /* webpackChunkName: "doctors-page"*/
      )
    ),
  },
  {
    path: "/doctors/:id",
    exact: true,
    component: lazy(() =>
      import(
        "../Component/Doctor/Doctor.js" /* webpackChunkName: "dodctors-page"*/
      )
    ),
  },
  {
    path: "/photo",
    label: "Фото робіт",
    exact: true,
    component: lazy(() =>
      import("../views/Photo/Photo.js" /* webpackChunkName: "photo-page"*/)
    ),
  },
  {
    path: "/price",
    label: "Ціни",
    exact: true,
    component: lazy(() =>
      import("../views/Price/Price.js" /* webpackChunkName: "price-page" */)
    ),
  },
  {
    path: "/promotions",
    label: "Акції",
    exact: true,
    component: lazy(() =>
      import(
        "../views/Promotions/Promotions.js" /* webpackChunkName: "promotions-page" */
      )
    ),
  },
  {
    path: "/contacts",
    label: "Контакти",
    exact: true,
    component: lazy(() =>
      import(
        "../views/Contacts/Contacts.js" /* webpackChunkName: "contacts-page" */
      )
    ),
  },
  {
    path: "/about",
    label: "Про клініку",
    exact: true,
    component: lazy(() =>
      import("../Component/About/About" /* webpackChunkName: "about-page" */)
    ),
  },
  {
    path: "/promotions/besplatnie-osmotri-i-konsultacii-dlya-detey",
    exact: true,
    component: lazy(() =>
      import(
        "../Component/Freereview/Freereview.js" /* webpackChunkName: "freereview-page" */
      )
    ),
  },
  {
    path: "/promotions/skidka-20-na-professionalnuyu-gigienu-polosti-rta",
    exact: true,
    component: lazy(() =>
      import(
        "../Component/Discount/Discount.js" /* webpackChunkName: "skidka-page" */
      )
    ),
  },
  // {
  //   path: "/diagnostic",
  //   exact: true,
  //   component: lazy(() =>
  //     import(
  //       "../Component/BlockService/Diagnostic/Diagnostic.js" /* webpackChunkName: "skidka-page" */
  //     )
  //   )
  // }
];

export default routes;
