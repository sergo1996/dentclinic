import React from "react";
import style from "./blockButton.module.scss";
import OverkayBlock from "../../Component/OverkayBlock/OverkayBlock";
import Toggler from "../../Component/Toggler/Toggler";

export default function BlockImageSelect() {
  const topFunction = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={style.blockButton_cover}>
      <button
        className={style.scrollTo}
        onClick={topFunction}
        title="Gototop"
      ></button>
      <Toggler>
        {({ isOpen, onToggle }) => (
          <>
            {isOpen && <OverkayBlock closeModal={onToggle} />}
            <div className={style.blockButton_information}>
              <div className={style.blockButton_document}>
                <a onClick={onToggle} className={style.blockButton_document_fi}>
                  <span className={style.servis_information_svg}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      data-svg="calendar"
                    >
                      <path d="M 2,3 2,17 18,17 18,3 2,3 Z M 17,16 3,16 3,8 17,8 17,16 Z M 17,7 3,7 3,4 17,4 17,7 Z"></path>
                      <rect width="1" height="3" x="6" y="2"></rect>
                      <rect width="1" height="3" x="13" y="2"></rect>
                    </svg>
                  </span>
                  ЗАПИСАТИСЬ НА ПРИЙОМ
                </a>

                <a className={style.blockButton_document_fi}>
                  <span className={style.servis_information_svg}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      data-svg="file-text"
                    >
                      <rect
                        fill="none"
                        stroke="#000"
                        width="13"
                        height="17"
                        x="3.5"
                        y="1.5"
                      ></rect>
                      <line
                        fill="none"
                        stroke="#000"
                        x1="6"
                        x2="12"
                        y1="12.5"
                        y2="12.5"
                      ></line>
                      <line
                        fill="none"
                        stroke="#000"
                        x1="6"
                        x2="14"
                        y1="8.5"
                        y2="8.5"
                      ></line>
                      <line
                        fill="none"
                        stroke="#000"
                        x1="6"
                        x2="14"
                        y1="6.5"
                        y2="6.5"
                      ></line>
                      <line
                        fill="none"
                        stroke="#000"
                        x1="6"
                        x2="14"
                        y1="10.5"
                        y2="10.5"
                      ></line>
                    </svg>
                  </span>
                  ДОКУМЕНТИ ОНЛАЙН
                </a>
              </div>

              <div className={style.blockButton_forse}>
                <h4>Дружіть з нами:</h4>
                <span className={style.blockButton_forse_svg}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    data-svg="facebook"
                  >
                    <path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"></path>
                  </svg>
                </span>

                <span className={style.blockButton_forse_svg}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    data-svg="instagram"
                  >
                    <path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"></path>
                    <circle cx="14.87" cy="5.26" r="1.09"></circle>
                    <path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"></path>
                  </svg>
                </span>
                <span className={style.blockButton_forse_svg}>
                  {" "}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    data-svg="youtube"
                  >
                    <path d="M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z"></path>
                  </svg>
                </span>
              </div>
            </div>
          </>
        )}
      </Toggler>
    </div>
  );
}
