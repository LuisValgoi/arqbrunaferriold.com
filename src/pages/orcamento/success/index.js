import React from "react";
import tw from "tailwind-styled-components";

import { Paragraph, Title } from "../../../components/ui";

const Success = () => {
  return (
    <Container>
      <Title>Agradecemos pelo contato!</Title>
      <Paragraph>
        {`Acabamos de receber o seu e-mail e em breve iremos entrar em contato.
        De próximos passos, saiba que iremos entrar em contato para agendar uma reunião por vídeo chamada para conversarmos sobre a proposta de orçamento.`}
      </Paragraph>
    </Container>
  );
}

export default Success;

Success.displayName = "Success";

const Container = tw.article`
  flex
  flex-col
  justify-center
  items-center
  mb-4
  px-4 sm:px-0
  max-w-300
`;