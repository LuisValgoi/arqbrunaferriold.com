import React from "react";

import About from "../../components/home/about";
import CTAs from "../../components/home/cta";

const Home = () => {
  return (
    <>
      <CTAs />
      <About />
    </>
  );
};

export default Home;

Home.displayName = "Home";
