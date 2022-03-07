import React from "react";
import tw from "tailwind-styled-components";

import StepBase from '../stepBase';
import { ButtonOutline as ButtonOutlineUI, Paragraph, Title } from "../ui";

const StepWelcome = ({ isGoingBack, navigateToStep }) => {
  return (
    <StepBase isGoingBack={isGoingBack}>
      <Title>SOLICITAÇÃO DE ORÇAMENTO</Title>
      <Paragraph>
        {`Olá, tudo bem?! Ficamos muito felizes que você chegou até aqui. Isso significa que está interessado em nosso trabalho. Para que isso aconteça, precisamos de algumas informações, para entendermos do que se trata o seu projeto.`}
      </Paragraph>
      <ButtonOutline onClick={() => navigateToStep(2, false)}>Começar</ButtonOutline>
    </StepBase>
  );
}

export default StepWelcome;

StepWelcome.displayName = "StepWelcome";

const ButtonOutline = tw(ButtonOutlineUI)`
  mt-6
  max-w-200
`;