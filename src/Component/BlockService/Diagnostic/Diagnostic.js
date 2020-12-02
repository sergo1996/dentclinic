import React, { Component } from "react";
import "./baner.css";

class About extends Component {
  render() {
    const { from } = this.props.location.state;
    console.log(from);
    return (
      <div className="slider_buttom">
        <ul>
          {from.map((item) => {
            return (
              <li>
                <div className="slider">
                  <img
                    src={item.images}
                    width="100%"
                    height="100%"
                    alt="Иллюстрация"
                  />
                  <div className="slider_part">
                    <h2 className="slider_description">{item.name}</h2>
                  </div>
                </div>

                <div className="coverblock">
                  <p>{item.one}</p>

                  <p>{item.two}</p>

                  <h4> {item.titleOne} </h4>
                  <p>{item.three}</p>

                  <p>{item.four}</p>
                  <h4> {item.titleTwo} </h4>
                  <p>{item.five}</p>

                  <p>{item.six}</p>

                  <span>{item.nameitemone}</span>

                  <ul>
                    {item.itemlistone.map((itemname) => {
                      return (
                        <li className="itemlistselect">{itemname.names}</li>
                      );
                    })}
                  </ul>
                  <h4>{item.titlethree}</h4>
                  <p>{item.seven}</p>

                  <span>{item.nameitemtwo}</span>
                  <ul>
                    {item.itemlisttwo.map((itemname) => {
                      return (
                        <li className="itemlistselect">{itemname.names}</li>
                      );
                    })}
                  </ul>
                  <p>{item.eight}</p>
                </div>

                <div className="coverblock_item">
                  <h2>Вартість послуг</h2>
                  <ul>
                    {item.price.map((itemnameprice) => {
                      return (
                        <li className="prices_block_information_price">
                          <span className="prices_block_information_price_first">
                            {itemnameprice.names}
                          </span>
                          <span className="prices_block_information_price_last">
                            {itemnameprice.price}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default About;
