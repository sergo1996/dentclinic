import React from "react";
import BanerView from "../../Component/BanerView/BanerView";

import ComandPeople from "../../Component/Comand/Comand";
import ServiceImageSelect from "../../Component/ServiceSection/ServiseSection";

function Home() {
  return (
    <div>
      <BanerView />
      <ServiceImageSelect />
      <ComandPeople />
    </div>
  );
}

export default Home;
