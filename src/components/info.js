import React from "react";
import tw from "tailwind-styled-components";
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookF, faPinterestP } from '@fortawesome/free-brands-svg-icons'

export default function Info() {
  return (
    <Container>
      <Brands>
        <BrandIcon size="2x" color="#744c2f" icon={faFacebookF} onClick={() => window.open("https://www.facebook.com/arqbrunaferri")} />
        <BrandIcon size="3x" color="#744c2f" icon={faInstagram} onClick={() => window.open("https://www.instagram.com/arqbrunaferri")} />
        <BrandIcon size="2x" color="#744c2f" icon={faPinterestP} onClick={() => window.open("https://br.pinterest.com/arqbrunaferri")} />
      </Brands>
      <Paragraph>em que posso te ajudar?</Paragraph>
    </Container>
  );
}

const Container = tw.article`
  flex
  flex-col
  justify-center
  items-center
`;

const BrandsInner = styled.div`
  max-width: 250px;
`;

const Brands = tw(BrandsInner)`
  flex
  justify-around
  items-center
  w-full
  px-4
  pb-4
`;

const BrandIcon = tw(FontAwesomeIcon)`
  cursor-pointer
  transform transition duration-300 ease-in-out 
  hover:text-arq-brown-200
  hover:scale-105
  focus:text-violet-600
`;

const Paragraph = tw.span`
  text-white
  text-center
  text-sm sm:text-md
  uppercase
  font-emperatriz
  rounded
  ${(props) => props.$hasMB && "mb-2"}
  px-4
  py-1
  bg-arq-brown-300
`;
