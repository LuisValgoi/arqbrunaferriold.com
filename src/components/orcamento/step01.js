import React from 'react';
import tw from 'tailwind-styled-components';

import StepBase from '../_shared_/stepBase';
import { ButtonPrimary as ButtonPrimaryUI, Paragraph, Title } from '../ui';

const Step01 = ({ isGoingBack, navigateToStep }) => {
  return (
    <StepBase isGoingBack={isGoingBack}>
      <Title>SOLICITAÇÃO DE ORÇAMENTO</Title>

      <div className='mt-2' />

      <Paragraph>
        {`Olá, tudo bem?! Ficamos muito felizes que você chegou até aqui. Isso significa que está interessado em nosso trabalho. Para que isso aconteça, precisamos de algumas informações, para entendermos do que se trata o seu projeto.`}
      </Paragraph>
      <Button onClick={() => navigateToStep(2, false)}>Começar</Button>
    </StepBase>
  );
};

export default Step01;

Step01.displayName = 'Step01';

const Button = tw(ButtonPrimaryUI)`
  mt-4
  max-w-200
`;
