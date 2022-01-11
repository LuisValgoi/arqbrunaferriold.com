import React from "react";
import tw from "tailwind-styled-components";

import photo from "../img/perfil.png";
import namecircle from "../img/name-circle.png";

export default function Avatar() {
  return (
    <Container>
      <Title>BRUNA FERRI</Title>
      <NameCircle src={namecircle} alt="BRUNA FERRI ARQUITETURA & INTERIORES" />
      <PhotoBorder />
      <Photo src={photo} alt="me" />
    </Container>
  );
}

const Container = tw.div`
  relative
  flex
  content-center
  justify-center
  items-center
  mb-12 sm:mb-14
`;

const Title = tw.h1`
  absolute
  uppercase
  text-arq-brown-300
  font-rockwell
  text-rcenter
  text-lg
  uppercase
  top-title
`;


const Photo = tw.img`
  bg-center
  w-40 sm:w-52
  rounded-full
  bg-cover
  bg-center
  shadow-lg
  bg-arq-green-100
  z-10
`;

const PhotoBorder = tw.div`
  absolute
  rounded-full
  w-48 sm:w-60
  h-48 sm:h-60
  animate-spin-slow
  bg-gradient-to-r from-arq-brown-100 via-arq-brown-300 to-arq-brown-700
`;

const NameCircle = tw.img`
  absolute
  rounded-full
  animate-spin-super-slow
  w-56 sm:w-72
  w-56 sm:h-72
`;
