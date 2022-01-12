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
    <>
      <LineTexture />
      <Layout>
        <Avatar />
        <Info />
        <CTAs />
        <About />
      </Layout>
    </>
  );
}

const LineTexture = styled.div`
  background-image: url(${LineTextureSrc});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  transform: scale(1.2);
  opacity: 0.4;
`;

export default App;
