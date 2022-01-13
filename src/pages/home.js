import React from "react";
import styled from "styled-components";

import Avatar from "../components/avatar";
import CTAs from "../components/cta";
import Info from "../components/info";
import Layout from "../components/layout";
import About from "../components/about";

import LineTextureSrc from "../img/lines.svg";

function App() {
  return (
    <LineTexture>
      <Layout>
        <Avatar />
        <Info />
        <CTAs />
        <About />
      </Layout>
    </LineTexture>
  );
}

const LineTexture = styled.div`
  background-image: linear-gradient(rgba(255,255,255, 0.4), rgba(255,255,255, 0.9)), url(${LineTextureSrc});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
`;

export default App;
