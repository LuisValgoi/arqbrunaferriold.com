import React from "react";
import tw from "tailwind-styled-components";
import styled from "styled-components";

export default function About() {
  return (
    <Container>
      <Title>sobre</Title>
      <Paragraph>
        {`Arquiteta e Urbanista formada pela Universidade do Vale do Rio dos Sinos. 
        
        Atuando na área de projetos de interiores residenciais & arquitetônicos de alto padrão, buscando transformar os ambientes em lares com autenticidade e funcionalidade. 
        
        Através de uma arquitetura única e sofisticada, com um olhar atento às necessidades de cada cliente e tendências atuais.`}
      </Paragraph>
    </Container>
  );
}

const Container = tw.article`
  flex
  flex-col
  justify-center
  items-center
  mb-4
`;

const Title = tw.h1`
  text-arq-brown-300
  font-bold
  text-center
  uppercase
  rounded
  py-1
`;

const Paragraph = styled.p`
  text-align: center;
  max-width: 300px;
  color: #29261d;
  font-size: small;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;