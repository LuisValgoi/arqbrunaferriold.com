import React from "react";
import tw from "tailwind-styled-components";
import styled from "styled-components";
import { useApp } from "../context/AppContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faPinterestP } from "@fortawesome/free-brands-svg-icons";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

const Info = () => {
  const { selectedMenu, setSelectedMenu } = useApp();

  return (
    <Container>
      <Brands>
        <BrandIcon size="2x" color="#744c2f" icon={faFacebookF} onClick={() => window.open("https://www.facebook.com/arqbrunaferri")} />
        <BrandIcon size="3x" color="#744c2f" icon={faInstagram} onClick={() => window.open("https://www.instagram.com/arqbrunaferri")} />
        <BrandIcon size="2x" color="#744c2f" icon={faPinterestP} onClick={() => window.open("https://br.pinterest.com/arqbrunaferri")} />
      </Brands>

      {selectedMenu === "ORCAMENTO" && (
        <Button onClick={() => setSelectedMenu("HOME")}>
          <ButtonIcon icon={faLongArrowAltLeft} size="1x" />
          voltar para home
        </Button>
      )}

      {selectedMenu === "HOME" && <Paragraph>em que posso te ajudar ?</Paragraph>}
    </Container>
  );
};

export default Info;

Info.displayName = "Info";

const Container = tw.article`
  flex
  flex-col
  justify-center
  items-center
  min-w-300
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

const Button = tw.button`
  cursor-pointer
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
  transform transition duration-300 ease-in-out
  hover:bg-arq-brown-700
  hover:scale-105
  hover:border-2
  hover:black
`;

const ButtonIcon = tw(FontAwesomeIcon)`
  mr-2
`;
