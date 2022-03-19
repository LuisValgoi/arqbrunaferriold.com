import React from "react";
import { useNavigate } from "react-router-dom";
import tw from "tailwind-styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

import { Paragraph, Title } from "../../../components/ui";
import { usePreventAccess } from "../../../hooks/usePreventAccess";

const OrcamentoFinalizado = () => {
  const navigate = useNavigate();

  usePreventAccess(() => {
    navigate("/orcamento");
  });

  return (
    <Container>
      <Title>Agradecemos pelo contato!</Title>
      <Paragraph>
        {`Acabamos de receber o seu e-mail.
        Como próximo passo, iremos entrar em contato para agendar uma reunião por vídeo chamada para conversarmos sobre a proposta de orçamento.
        Muito obrigada!`}
      </Paragraph>
      <Button onClick={() => navigate("/")}>
        <ButtonIcon icon={faLongArrowAltLeft} size="1x" />
        voltar para home
      </Button>
    </Container>
  );
};

export default OrcamentoFinalizado;

OrcamentoFinalizado.displayName = "OrcamentoFinalizado";

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
