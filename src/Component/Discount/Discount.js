import React from "react";
import style from "./style.module.scss";

const Discount = () => {
  return (
    <div className={style.block_cover}>
      <h1 className={style.block_title}>
        БЕЗКОШТОВНІ ОГЛЯДИ І КОНСУЛЬТАЦІЇ ДЛЯ ДІТЕЙ
      </h1>
      <p>Посмішка це здорово! А здорова дитяча посмішка - подвійно здорово!</p>
      <p>
        Мережа стоматологічних клінік Dent Art, для своїх маленьких пацієнтів,
        проводить безкоштовні огляди і консультації!
      </p>
      <p>Що входить:</p>
      <ul>
        <li>консультація і огляд дитячого терапевта</li>
        <li>складання терапевтичного плану лікування</li>
        <li>діагностика (КТ, рентген) за показаннями</li>
        <li>знижка на терапевтичне лікування 10%</li>
        <li>знижка на професійну гігієну 25%</li>
      </ul>

      <h4>УМОВИ АКЦІЇ</h4>
      <p>Акція проходить за адресою м.Луцьк, Харківське шосе, 56</p>
      <p>Попередній запис обов'язковий! Кількість записів обмежена!</p>
      <p>Записатися можна за телефоном 0 800 331 300</p>
    </div>
  );
};

export default Discount;
