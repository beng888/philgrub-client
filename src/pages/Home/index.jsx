import React from "react";

import Intro from "./Intro";
import Veggie from "./Veggie";

const Home = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row min-h-screen relative overflow-hidden">
      <Veggie />
      <Intro />
      <div className="w-full bg-second h-20 absolute bottom-0 -z-20" />
    </div>
  );
};

export default Home;
