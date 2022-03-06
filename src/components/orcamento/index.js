import React, { useState } from "react";

import StepWelcome from "./stepWelcome";
import StepDados from "./stepDados";

const Orcamento = () => {
  const [selectedStep, setSelectedStep] = useState(1);
  const [isGoingBack, setIsGoingBack] = useState(false);

  const navigateToStep = (step, isGoingBack) => {
    setSelectedStep(step);
    setIsGoingBack(isGoingBack);
  };
  
  return (
    <>
      {selectedStep === 1 && <StepWelcome isGoingBack={isGoingBack} navigateToStep={navigateToStep} />}
      {selectedStep === 2 && <StepDados isGoingBack={isGoingBack} navigateToStep={navigateToStep} />}
    </>
  );
}

export default Orcamento;

Orcamento.displayName = "Orcamento";