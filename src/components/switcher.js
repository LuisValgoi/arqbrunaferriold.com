import React from "react";

import { useApp } from "../context/AppContext";
import Home from "./home/index";
import Orcamento from "./orcamento/index";
import Avatar from "./avatar";
import Info from "./info";

const Switcher = () => {
  const { selectedMenu } = useApp();

  return (
    <>
      <Avatar />
      <Info />

      {selectedMenu === "HOME" && <Home />}
      {selectedMenu === "ORCAMENTO" && <Orcamento />}
    </>
  );
}

export default Switcher;

Switcher.displayName = "Switcher";