import React from "react";
import "./Home.css";

export default function BlockImageSelect() {
  return (
    <div className="slider">
      <div className="slider-part">
        <h2 className="slider_description">
          ЛІКУЄМО СВОЇХ ПАЦІЄНТІВ ТАК, <br />
          ЯК МИ ХОТІЛИ Б ЛІКУВАТИСЯ САМІ
        </h2>

        <div className="slider-partn-end">
          <button className="cklickbutton">Про клініку</button>
          <button className="cklickbutton">Записатись на прийом</button>
        </div>
      </div>
    </div>
  );
}
