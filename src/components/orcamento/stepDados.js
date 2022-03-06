import React from "react";
import tw from "tailwind-styled-components";

import StepBase from '../stepBase';
import { ButtonOutline as ButtonOutlineUI, ButtonPrimary as ButtonPrimaryUI, Paragraph, Title } from "../ui";

const StepDados = ({ navigateToStep, isGoingBack }) => {
  return (
    <StepBase isGoingBack={isGoingBack}>
      <Title>MAIS SOBRE VOCÊ</Title>
      <Paragraph>
        BLA
      </Paragraph>
      <ButtonArea>
        <ButtonOutline onClick={() => navigateToStep(1, true)}>Voltar</ButtonOutline>
        <ButtonPrimary onClick={() => navigateToStep(3, false)}>Continuar</ButtonPrimary>
      </ButtonArea>
    </StepBase>
  );
}

export default StepDados;

StepDados.displayName = "StepDados";

const ButtonArea = tw.div`
  grid
  grid-cols-2
  gap-4
`;

const ButtonOutline = tw(ButtonOutlineUI)`
  mt-4
  max-w-150
`;

const ButtonPrimary = tw(ButtonPrimaryUI)`
  mt-4
  max-w-150
`;