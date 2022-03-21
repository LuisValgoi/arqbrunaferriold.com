import React from "react";
import tw from "tailwind-styled-components";

import { Paragraph, Title } from '../ui';

const About = () => {
  return (
    <Container>
      <Title>sobre</Title>
      <Paragraph>
        {`Arquiteta e Urbanista, atuando na área de projetos de interiores residenciais & arquitetônicos de alto padrão, buscando transformar os ambientes em lares com autenticidade e funcionalidade, através de uma arquitetura única e sofisticada, com um olhar atento às necessidades de cada cliente e tendências atuais.`}
      </Paragraph>
    </Container>
  );
}

export default About;

About.displayName = "About";

const Container = tw.article`
  flex
  flex-col
  justify-center
  items-center
  mb-4
  px-4 sm:px-0
  max-w-320
`;