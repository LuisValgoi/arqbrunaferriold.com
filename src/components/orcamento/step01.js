import React from "react";
import tw from "tailwind-styled-components";

import StepBase from '../stepBase';
import { ButtonOutline as ButtonOutlineUI, Paragraph, Title } from "../ui";

const Step01 = ({ isGoingBack, navigateToStep }) => {
  return (
    <StepBase isGoingBack={isGoingBack}>
      <Title>SOLICITAÇÃO DE ORÇAMENTO</Title>

      <ParagraphArea>
        <Paragraph>
          {`Olá, tudo bem?! Ficamos muito felizes que você chegou até aqui. Isso significa que está interessado em nosso trabalho. Para que isso aconteça, precisamos de algumas informações, para entendermos do que se trata o seu projeto.`}
        </Paragraph>
      </ParagraphArea>
      <ButtonOutline onClick={() => navigateToStep(2, false)}>Começar</ButtonOutline>
    </StepBase>
  );
}

export default Step01;

Step01.displayName = "Step01";

const ParagraphArea = tw.div`
  max-w-300
`;

const ButtonOutline = tw(ButtonOutlineUI)`
  mt-6
  max-w-200
`;