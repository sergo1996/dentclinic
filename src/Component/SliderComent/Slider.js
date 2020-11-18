import React from "react";
import Carousel from "react-elastic-carousel";
import "./style.css";

export default function ServiceImageSelect() {
  return (
    <div className="styling-example">
      <h2 className="title_header">Відгуки</h2>
      <Carousel itemsToShow={2}>
        <div className="servis_block_item">
          <div className="image">
            <img alt="qwe" src="https://i.ibb.co/0yVckgD/zub-1.png" />
          </div>

          <div className="servis_information">
            <p className="servis_name_special">
              Добрый день! Вчера удаляла 8ку у самого лучшего врача- Романюк
              Ирина! Удаление оказалось неожиданно сложным и для меня и для
              врача. К сожалению врачу пришлось отложить приём следующего
              пациента по записи из-за непредсказуемо тяжелого удаления, которое
              длилось аж целых два часа, вместо запланированного часа. Жаль что
              из-за меня нарушились планы другого человека , но это ни в коем
              случае не вина врача или Клиники в целом!
            </p>
            <h3>
              <div className="image_last">
                <img alt="qweew" src="https://i.ibb.co/XFVW72f/111222333.png" />
              </div>
              <span className="name_people">Алиса Геворкян</span>
            </h3>
          </div>
        </div>
        <div className="servis_block_item">
          <div className="image">
            <img alt="qwefewew" src="https://i.ibb.co/0yVckgD/zub-1.png" />
          </div>

          <div className="servis_information">
            <p className="servis_name_special">
              Очень понравилась эта клиника. Настолько, что теперь езжу с
              Теремков на лечение :) Спасибо доктору Александре за
              профессиональный и бережный подход к пациенту!
            </p>
            <h3>
              <div className="image_last">
                <img
                  alt="qwfweeew"
                  src="https://i.ibb.co/XFVW72f/111222333.png"
                />
              </div>
              <span className="name_people">Юлия Белошапка</span>
            </h3>
          </div>
        </div>
        <div className="servis_block_item">
          <div className="image">
            <img alt="qwfdseew" src="https://i.ibb.co/0yVckgD/zub-1.png" />
          </div>

          <div className="servis_information">
            <p className="servis_name_special">
              Доктор Романюк Ирина - молодая, но очень профессиональная,
              аккуратная и бережная. Консультацией очень довольна. Спасибо.
            </p>
            <h3>
              <div className="image_last">
                <img
                  alt="qwdfeew"
                  src="https://i.ibb.co/XFVW72f/111222333.png"
                />
              </div>
              <span className="name_people">Инесса Устинова</span>
            </h3>
          </div>
        </div>

        <div className="servis_block_item">
          <div className="image">
            <img alt="qweefdw" src="https://i.ibb.co/0yVckgD/zub-1.png" />
          </div>

          <div className="servis_information">
            <p className="servis_name_special">
              Благодарю специалистов клиники за оказанные мне услуги Понравилось
              в клинике абсолютно все - начиная со входа как меня встретила
              администратор дружественная атмосфера приятный интерьер
              современное оборудование чистый аккуратный ремонт Теперь эта
              клиника - мой фаворит Будем ходить сюда всей семьей.
            </p>
            <h3>
              <div className="image_last">
                <img
                  alt="qwfdeew"
                  src="https://i.ibb.co/XFVW72f/111222333.png"
                />
              </div>
              <span className="name_people">Валентин Воронин</span>
            </h3>
          </div>
        </div>
        <div className="servis_block_item">
          <div className="image">
            <img alt="qwfdeew" src="https://i.ibb.co/0yVckgD/zub-1.png" />
          </div>

          <div className="servis_information">
            <p className="servis_name_special">
              Здравствуйте! Вчера с дочкой ходили пломбировать зубик, к нам
              очень внимательно и со знанием дела отнеслись, дочка в конце
              процедуры даже обняла и поблагодарила доктора Мирана, который с
              высоким уровнем профессионализма всегда обслуживает маленьких
              клиентов. Даже если детки капризничают, он очень деликатно и
              терпеливо их уговаривает и старается развеселить. Мы остались
              очень довольны работой доктора и клиники в целом. Обслуживаемся
              здесь уже не первый год . Благодарим за доброжелательное отношение
              ❤️
            </p>
            <h3>
              <div className="image_last">
                <img
                  alt="qwefdsew"
                  src="https://i.ibb.co/XFVW72f/111222333.png"
                />
              </div>
              <span className="name_people">Екатерина Стужак</span>
            </h3>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
