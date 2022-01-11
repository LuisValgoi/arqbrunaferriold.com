import React from "react";
import styled from "styled-components";
import tw from "tailwind-styled-components";

import Avatar from "../components/avatar";
import CTAs from "../components/cta";
import Info from "../components/info";
import Layout from "../components/layout";

import linhaleft from "../img/linha-left.png";

function App() {
  return (
    <StyledApp>
      <Layout>
        <Avatar />
        <Info />
        <CTAs />
      </Layout>
    </StyledApp>
  );
}

export default App;

const StyledApp = tw.div`
  absolute
  overflow-hidden
`;

const LinhaLeft = styled.div`
  background-image: url(${linhaleft});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  top: -100px;
  left: -100px;
  min-width: 30vh;
  min-height: 30vh;
`;