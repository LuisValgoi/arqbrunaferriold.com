import React from "react";
import tw from "tailwind-styled-components";

import { useNavigate } from "react-router-dom";
import { ButtonOutline } from "../ui";

const CTAs = () => {
  const navigate = useNavigate();
  const urlRender = process?.env?.REACT_APP_CTA_RENDER;
  const urlContato = "mailto:arqbrunaferri@gmail.com";
  const urlTCC = process?.env?.REACT_APP_CTA_TCC_LINK;

  const handleClickOrcamento = () => navigate("/orcamento");

  return (
    <Container>
      <ButtonOutline onClick={handleClickOrcamento}>
        SOLICITAR ORÇAMENTO
      </ButtonOutline>
      <ButtonOutline onClick={() => window.open(urlRender, "_blank")}>
        SOLICITAR RENDER
      </ButtonOutline>
      <ButtonOutline onClick={() => window.open(urlContato, "_blank")}>
        ENTRAR EM CONTATO
      </ButtonOutline>
      <ButtonOutline onClick={() => window.open(urlTCC, "_blank")}>
        MAIS SOBRE MEU TCC
      </ButtonOutline>
    </Container>
  );
}

export default CTAs;

CTAs.displayName = "CTAs";

const Container = tw.article`
  flex
  flex-col
  justify-center
  items-center
  mt-4
  max-w-300
`;