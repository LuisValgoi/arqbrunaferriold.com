import React from "react";

import About from "./about";
import CTAs from "./cta";

const Home = () => {
  return (
    <>
      <CTAs />
      <About />
    </>
  );
}

export default Home;

Home.displayName = "Home";