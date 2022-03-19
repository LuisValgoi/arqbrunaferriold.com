import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../../pages/home";
import NaoEncontrado from "../../pages/nao-encontrado";
import Orcamento from "../../pages/orcamento";
import OrcamentoFinalizado from "../../pages/orcamento/finalizado";
import OrcamentoErro from "../../pages/orcamento/erro";

const Switcher = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="orcamento" element={<Orcamento />}/>
        <Route path="orcamento/finalizado" element={<OrcamentoFinalizado />} />
        <Route path="orcamento/erro" element={<OrcamentoErro />} />
        <Route path="*" element={<NaoEncontrado />} />
      </Routes>
    </>
  );
};

export default Switcher;

Switcher.displayName = "Switcher";
