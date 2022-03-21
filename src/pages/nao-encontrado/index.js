import React from "react";
import { useNavigate } from "react-router-dom";
import tw from "tailwind-styled-components";

import { Paragraph, Title } from "../../components/ui";

const NaoEncontrado = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>PÁGINA NÃO ENCONTRADA</Title>
      <Paragraph>{`Infelizmente acabamos identificando que a página que você tentou acessar não consta em nosso sistema.`}</Paragraph>
      <Button onClick={() => navigate("/")}>voltar para home</Button>
    </Container>
  );
};

export default NaoEncontrado;

NaoEncontrado.displayName = "NaoEncontrado";

const Container = tw.article`
  flex
  flex-col
  justify-center
  items-center
  mb-4
  px-4 sm:px-0
  max-w-300
`;

const Button = tw.span`
  text-white
  text-center
  text-sm sm:text-md
  uppercase
  font-emperatriz
  rounded
  px-4
  py-2
  bg-arq-brown-300
  border-2
  border-arq-brown-500
  mb-2
  mt-2

  cursor-pointer
  transform transition duration-300 ease-in-out
  hover:bg-arq-brown-700
  hover:border-arq-brown-700
  hover:scale-105
  hover:black
`;
