import React from "react";
import tw from "tailwind-styled-components";
import styled from 'styled-components';

import { useApp } from '../context/AppContext';

import photo from "../img/perfil.png";
import nameCircle from "../img/name-circle.png";

const Avatar = () => {
  const { selectedMenu } = useApp();

  return (
    <Container $decrease={selectedMenu === "ORCAMENTO"}>
      <NameCircle src={nameCircle} alt="BRUNA FERRI ARQUITETURA & INTERIORES" />
      <PhotoBorder />
      <Photo src={photo} alt="me" width="160px" height="160px" />
    </Container>
  );
}

export default Avatar;

Avatar.displayName = "Avatar";

const Container = tw.div`
  relative
  flex
  content-center
  justify-center
  items-center
  mb-10
  transform transition duration-300 ease-in-out
  scale-90
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
  max-width: 300px;

  @keyframes spin-name-circle {
    from {
      transform: rotate(0deg) scale(0.8);
    }
    to {
      transform: rotate(360deg) scale(0.8);
    }
  }
`;