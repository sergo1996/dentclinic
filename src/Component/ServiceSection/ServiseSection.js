import React from "react";
import style from "./servises.module.scss";
import jsonselect from "./menu.json";

export default function ServiceImageSelect() {
  return (
    <div className={style.servis_block}>
      {jsonselect.map((item) => {
        return (
          <div className={style.servis_block_item}>
            <div className={style.servis_image}>
              <img src={item.imagefilt} alt={item.imagefilt} />
            </div>

            <div className={style.servis_information}>
              <h2 className={style.servis_name_special}>{item.name} </h2>
              <ul className={style.servis_item_li}>
                {item.itemlist.map((name) => (
                  <li key={name} className={style.servis_item_select}>
                    {name}
                  </li>
                ))}
              </ul>

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
            </div>
          </div>
        );
      })}
    </div>
  );
}