import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import styled from 'styled-components';

import photo from "../img/perfil.png";
import nameCircle from "../img/name-circle.png";
import { useBreakpoint, isSmallScreen } from "../hooks/useBreakpoints";

export default function Avatar() {
  const breakpoint = useBreakpoint();

  return (
    <Container>
      <NameCircle $small={isSmallScreen(breakpoint)} src={nameCircle} alt="BRUNA FERRI ARQUITETURA & INTERIORES" />
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

const NameCircle = styled.img`
  position: absolute;
  z-index: 10;
  animation-name: spin-name-circle;
  animation-duration: 80000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes spin-name-circle {
    from {
      transform: ${(props) => (props.$small ? "rotate(0deg) scale(0.93)" : "rotate(0deg) scale(1.15)")};
    }
    to {
      transform: ${(props) => (props.$small ? "rotate(360deg) scale(0.93)" : "rotate(360deg) scale(1.15)")};
    }
  }
`;