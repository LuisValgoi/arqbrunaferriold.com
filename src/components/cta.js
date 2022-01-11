import React from "react";
import tw from "tailwind-styled-components";

export default function CTAs() {
  const urlOrcamento = "https://api.whatsapp.com/send?phone=5551981909312&text=Ol%C3%A1,%20gostaria%20de%20realizar%20um%20or%C3%A7amento!%20";
  const urlRender = "https://api.whatsapp.com/send?phone=5551981909312&text=Ol%C3%A1,%20como%20funciona%20o%20seu%20servi%C3%A7o%20de%20render?%20";
  const urlContato = "mailto:arqbrunaferri@gmail.com";

  return (
    <Container>
      <Button onClick={() => window.open(urlOrcamento, "_blank")}>
        SOLICITAR ORÇAMENTO
      </Button>
      <Button onClick={() => window.open(urlRender, "_blank")}>
        SOLICITAR RENDER
      </Button>
      <Button onClick={() => window.open(urlContato, "_blank")}>
        ENTRAR EM CONTATO
      </Button>
    </Container>
  );
}

const Container = tw.article`
  flex
  flex-col
  justify-center
  items-center
  mt-4
`;

const Button = tw.button`
  w-full
  pt-4
  py-2
  px-10
  mb-4
  flex
  justify-center
  items-center
  uppercase
  text-arq-brown-300
  font-rockwell
  rounded
  bg-transparent
  border-2
  border-arq-brown-300
  transform transition duration-300 ease-in-out
  hover:bg-arq-brown-300
  hover:scale-105
  hover:text-arq-brown-50
  hover:border-arq-brown-700
`;
