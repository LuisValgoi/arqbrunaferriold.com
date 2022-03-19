import React from "react";
import { useNavigate } from "react-router-dom";
import tw from "tailwind-styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

import { Paragraph, Title } from "../../../components/ui";
import { usePreventAccess } from "../../../hooks/usePreventAccess";

const OrcamentoErro = () => {
  const navigate = useNavigate();

  usePreventAccess(() => {
    navigate("/orcamento");
  });

  return (
    <Container>
      <Title>Identificamos um erro!</Title>
      <Paragraph>
        {`Infelizmente, durante o envio do formulário aos nossos servidores, identificamos um erro.
        Estaremos trabalhando o mais rápido possível para solucionar o problema!`}
      </Paragraph>
      <Button onClick={() => navigate("/")}>
        <ButtonIcon icon={faLongArrowAltLeft} size="1x" />
        VOLTAR PARA HOME
      </Button>
    </Container>
  );
};

export default OrcamentoErro;

OrcamentoErro.displayName = "OrcamentoErro";

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
  mt-4

  cursor-pointer
  transform transition duration-300 ease-in-out
  hover:bg-arq-brown-700
  hover:border-arq-brown-700
  hover:scale-105
  hover:black
`;

const ButtonIcon = tw(FontAwesomeIcon)`
  mr-2
  color-white
  text-white
`;
