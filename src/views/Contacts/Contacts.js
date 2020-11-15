import React from "react";
import style from "./containerstyle.module.scss";
import informationList from "./ContactsItems";

const iframeStyle = {
  width: "100%",
  height: "600px",
  border: "0",
  position: "absolute",
};
const Contacts = () => (
  <div>
    <div className={style.contact_cover_block}>
      <h1 className={style.contact_title}>КОНТАКТИ</h1>
      <div className={style.contact_container_list}>
        {informationList.map((item) => {
          return (
            <div className={style.contact_container_item}>
              <img src={item.image} alt={item.name} />
              <h3 className={style.contact_container_item_title}>
                {item.name}
              </h3>
              <p className={style.contact_container_item_inform}>
                {item.inform}
              </p>
            </div>
          );
        })}
      </div>

      <div className={style.contact_cover_locationblock}>
        <img src="https://i.ibb.co/D49f0Mq/logo-icon.png" alt="logo-icon" />
        <div>
          <p className={style.contact_cover_locationblock_title}>
            <a href="https://goo.gl/maps/hRaK2samSscAiEsH9">
              м.Луцьк, вул. Словацького, 7
            </a>
          </p>
        </div>
      </div>
    </div>
    <div className={style.contact_cover_iframe}>
      f
      <iframe
        title="navigation"
        src={
          "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1262.2553974532898!2d25.32408362064013!3d50.74756169782342!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472599e8c056e75d%3A0xfed12e5037069602!2sShow%20Basilic!5e0!3m2!1suk!2sua!4v1604931716765!5m2!1suk!2sua"
        }
        frameborder={"0"}
        style={iframeStyle}
        aria-hidden={"false"}
        tabindex={"0"}
      ></iframe>
    </div>
  </div>
);

export default Contacts;

// import React from "react";
// import Doctor from "../../Component/Doctor/Doctor";
// const iframeStyle = {
//   width: "100%",
//   height: "600px",
//   border: "0",
//   position: "absolute",
// };

// const Contacts = () => (
//   <div>
//     <Doctor />
//     <iframe
//       src={
//         "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1262.2553974532898!2d25.32408362064013!3d50.74756169782342!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472599e8c056e75d%3A0xfed12e5037069602!2sShow%20Basilic!5e0!3m2!1suk!2sua!4v1604931716765!5m2!1suk!2sua"
//       }
//       frameborder={"0"}
//       style={iframeStyle}
//       aria-hidden={"false"}
//       tabindex={"0"}
//     ></iframe>
//   </div>
// );

// export default Contacts;
