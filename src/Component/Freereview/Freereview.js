import React from "react";
import style from "./style.module.scss";

const Freereview = () => {
  return (
    <div className={style.block_cover}>
      <h1 className={style.block_title}>ЗНИЖКА 20% ПРОФГІГІЄНУ</h1>
      <h4>4 ПРОФЕСІЙНІ ГІГІЄНИ НА РІК ЗА ЦІНОЮ 4950 ГРН ЗАМІСТЬ 6200 ГРН.</h4>
      <p>
        Вам встановили брекети, елайнери або ізілайнери? Вітаємо, Ви на шляху до
        здорової і красивої усмішки! Але це зовсім не означає, що на цьому
        потрібно заспокоїтися і пустити все на самотік. Без правильної гігієни
        порожнини рота результат не буде бажаним.
      </p>
      <p>
        На жаль, природа не передбачила таку можливість як носіння брекетів або
        невидимих ​​кап, тому природне очищення порожнини рота сильно
        ускладнюється. Навколо брекетів починається накопичуватися наліт і
        шкідливі бактерії. В результаті емаль демінералізуєтся і руйнується.
        Якщо не дбати про гігієну порожнини рота в цей період, то, в кращому
        випадку, після зняття брекетів залишаться білясті, крейдяні плями на
        зубах, які псують естетику. У гіршому - глибокий карієс і проблеми з
        яснами. Як результат - без професійної гігієни порожнини рота Вам просто
        не обійтися.
      </p>
      <p>
        Тому ми наполегливо рекомендуємо Вам скористатися нашою акційною
        пропозицією і скоріше записатися на прийом до наших фахівців!
      </p>

      <h4>УМОВИ АКЦІЇ</h4>
      <p>
        Акція діє тільки для ортодонтичних пацієнтів з встановленими брекетами,
        елайнерами або ізілайнерами.
      </p>
      <p>Знижки не сумуються.</p>
      <p>Акція діє до 31.12.2020</p>
      <p>Записатися можна за телефоном 0 800 331 300</p>
    </div>
  );
};

export default Freereview;
