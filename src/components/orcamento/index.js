import React, { useState } from "react";

import StepWelcome from "./stepWelcome";

const Orcamento = () => {
  const [selectedStep, setSelectedStep] = useState(1);
  
  return (
    <>
      {selectedStep === 1 && <StepWelcome setSelectedStep />}
    </>
  );
}

export default Orcamento;

Orcamento.displayName = "Orcamento";