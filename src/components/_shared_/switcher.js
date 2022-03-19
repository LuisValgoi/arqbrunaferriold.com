import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../../pages/home";
import Orcamento from "../../pages/orcamento";
import Success from "../../pages/orcamento/success";

const Switcher = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="orcamento" element={<Orcamento />}>
          <Route path="success" element={<Success />} />
        </Route>
      </Routes>
    </>
  );
};

export default Switcher;

Switcher.displayName = "Switcher";
