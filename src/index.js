import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import { AppProvider } from './context/AppContext';
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/_shared_/layout";
import Switcher from "./components/_shared_/switcher";
import LineTextureSrc from "./img/lines.svg";

import "tailwindcss/tailwind.css";
import "./index.css";

const LineTexture = styled.div`
  background-image: linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.9)), url(${LineTextureSrc});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

ReactDOM.render(
  <AppProvider>
    <LineTexture>
      <BrowserRouter>
        <Layout>
          <Switcher />
        </Layout>
      </BrowserRouter>
    </LineTexture>
  </AppProvider>,
  document.getElementById("root"),
);
