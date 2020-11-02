import React from "react";
import "./Home.css";
function Home() {
  return (
    <div>
      <div className="sliderdarck">
        <section className="slider clearfix">
          <div className="container clearfix ">
            <div className="part-text">
              <h2 className="text_description_block">
                ЛІКУЄМО СВОЇХ ПАЦІЄНТІВ ТАК, <br />
                ЯК МИ ХОТІЛИ Б ЛІКУВАТИСЯ САМІ
              </h2>
              <button className="cklickbutton">Про клініку</button>
              <button className="cklickbutton">Записатись на прийом</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
