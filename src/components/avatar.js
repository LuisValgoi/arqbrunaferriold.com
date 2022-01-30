import React from "react";
import tw from "tailwind-styled-components";
import styled from 'styled-components';

import photo from "../img/perfil.png";
import nameCircle from "../img/name-circle.png";

export default function Avatar() {
  return (
    <Container>
      <NameCircle src={nameCircle} alt="BRUNA FERRI ARQUITETURA & INTERIORES" />
      <PhotoBorder />
      <Photo src={photo} alt="me" width="160px" height="160px" />
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

const Photo = tw.img`
  bg-center
  w-40
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
  w-48
  h-48
  animate-spin-slow
  bg-gradient-to-r from-arq-brown-100 via-arq-brown-300 to-arq-brown-700
`;

const NameCircle = styled.img`
  position: absolute;
  z-index: 10;
  animation-name: spin-name-circle;
  animation-duration: 80000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes spin-name-circle {
    from {
      transform: rotate(0deg) scale(0.8);
    }
    to {
      transform: rotate(360deg) scale(0.8);
    }
  }
`;