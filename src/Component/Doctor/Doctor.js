import React from "react";
import "./doctorstyle.css";

export default function Doctor(props) {
  const { from } = props.location.state;
  return (
    <div className="doctor_cover">
      <div className="doctor_item">
        <img
          height="485px"
          width="370px"
          src={from.image}
          alt="альтернативный текст"
        />

        <h2 className="doctor_name"> {from.nameSelect}</h2>
      </div>

      <div className="doctor_about_text">
        <h2 className="doctor_name"> Про лікаря</h2>
        <div className="doctor_cover_item">
          <p className="doctor_cover_item_spec">
            <strong>Спеціалізація </strong>
            {from.specialization}
          </p>
          <p className="doctor_cover_item_worck">
            <strong>Досвід роботи </strong> {from.experience}
          </p>
          <p className="doctor_cover_item_location">
            <strong> Відділення </strong>:вул. Чавдар, 7
          </p>
          <p>
            <strong className="doctor_cover_item_educate"> Освіта: </strong>
            {from.education.map((item) => (
              <p className="basicText">{item.text}</p>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
