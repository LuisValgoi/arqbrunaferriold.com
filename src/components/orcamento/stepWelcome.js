import React from "react";
import tw from "tailwind-styled-components";

import { Paragraph, Title } from "../ui/ui";

const StepWelcome = ({ setSelectedStep }) => {
  return (
    <Container>
      <Title>SOLICITAÇÃO DE PROPOSTA DE PROJETO</Title>
      <Paragraph>
        {`Olá, tudo bem?! Ficamos muito felizes que você chegou até aqui. Isso significa que está interessado em nosso trabalho. Para que isso aconteça, precisamos de algumas informações, para entendermos do que se trata o seu projeto.`}
      </Paragraph>
    </Container>
  );
}



export const Container = tw.article`
  flex
  flex-col
  justify-center
  items-center
  mb-4
  mt-4
`;

export default StepWelcome;

StepWelcome.displayName = "StepWelcome";