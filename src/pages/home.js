import React from "react";

import Avatar from "../components/avatar";
import CTAs from "../components/cta";
import Info from "../components/info";
import Layout from "../components/layout";
import About from "../components/about";

function App() {
  return (
    <Layout>
      <Avatar />
      <Info />
      <CTAs />
      <About />
    </Layout>
  );
}

export default App;
