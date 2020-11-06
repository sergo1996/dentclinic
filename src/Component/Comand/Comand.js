import React from "react";
import style from "./comand.module.scss";
import jsonselect from "./comand.json";

export default function Servises() {
  return (
    <div className={style.section_back_color}>
      <div>
        <div className={style.section_title}>
          <h2 className={style.section_title_name}>Наша команда</h2>
          <div className={style.section_block_svg}>
            <a className={style.section_title_button}>Всі лікарі</a>
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

      <div className={style.section_comand_lis}>
        {jsonselect.map((item) => {
          return (
            <div key={item.id} className={style.comand_item}>
              <img
                height="350px"
                width="277px"
                src="https://i.ibb.co/5r2QGy0/0ade87ce460982897c23ddd637f2723f-1595942584.jpg"
                alt="альтернативный текст"
              />
              <div className={style.transition_slider}>
                <div className={style.block_button}>
                  <h2 className={style.item_name}> {item.name}</h2>
                  <span className={style.comand_item_position}>
                    {item.specialty}
                  </span>
                  <a className={style.comand_item_more}>{item.viuveProfil}</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
