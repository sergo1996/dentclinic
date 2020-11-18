import React from "react";
import "./style.css";
import Toggler from "../../Component/Toggler/Toggler";

export default class PriceComponent extends React.Component {
  render() {
    const { itemList } = this.props;

    return (
      <div className="prices_block_cover">
        {itemList.map((item, number) => {
          return (
            <div key={item.name}>
              <Toggler key={item.name}>
                {({ isOpen, onToggle }) => (
                  <>
                    <li
                      key={item.name}
                      onClick={onToggle}
                      value={number}
                      className="prices_items"
                    >
                      <div className="prices_block_title_toggle">
                        <h1>{item.name}</h1>
                        <div className="prices_block_title_toggle_img">
                          {isOpen ? (
                            <img src="https://i.ibb.co/k9m6tfV/up-icon-icons-com-61204.png" />
                          ) : (
                            <img src="https://i.ibb.co/mzbTxPP/down-icon-icons-com-61209.png" />
                          )}
                        </div>
                      </div>

                      {isOpen && (
                        <div>
                          <div className="prices_block_information">
                            <div className="prices_block_information_text">
                              <p>{item.text}</p>
                            </div>

                            <div className="prices_block_information_img">
                              <img
                                src={item.image}
                                style={{ height: "200px", borderRadius: "15%" }}
                                alt={item.name}
                              />
                            </div>
                          </div>
                          <ul>
                            {item.textitems.map((itemtext) => {
                              return (
                                <li className="prices_block_information_price">
                                  <span className="prices_block_information_price_first">
                                    {itemtext.names}
                                  </span>
                                  <span className="prices_block_information_price_last">
                                    {itemtext.price}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      )}
                    </li>
                  </>
                )}
              </Toggler>
            </div>
          );
        })}
      </div>
    );
  }
}
