import React from "react";
import BanerView from "../../Component/BanerView/BanerView";

import ComandPeople from "../../Component/Comand/Comand";
import ServiceImageSelect from "../../Component/ServiceSection/ServiseSection";
import styleselect from "./comandhome.module.scss";
import Slider from "../../Component/SliderComent/Slider";

function Home(props) {
  return (
    <div>
      <BanerView />
      <ServiceImageSelect />
      <Slider />
      <ComandPeople {...props} renderBlock="true" style={styleselect} />
    </div>
  );
}

export default Home;
