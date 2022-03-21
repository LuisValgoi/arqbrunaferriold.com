import React from "react";
import tw from "tailwind-styled-components";

import { useNavigate } from "react-router-dom";
import { ButtonOutline } from "../ui";

const CTAs = () => {
  const navigate = useNavigate();
  const urlRender = "https://api.whatsapp.com/send?phone=5551981909312&text=Ol%C3%A1,%20como%20funciona%20o%20seu%20servi%C3%A7o%20de%20render?%20";
  const urlContato = "mailto:arqbrunaferri@gmail.com";
  const urlTCC = "https://drive.google.com/file/d/19hfupNCSJW6yaz5ftTmKFrUpbukFQ-pf/view?usp=sharing";

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