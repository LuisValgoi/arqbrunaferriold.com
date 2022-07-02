import React from "react";
import tw from "tailwind-styled-components";
import styled from "styled-components";
import { useOrcamentoURL, useHomeURL } from "../../hooks/useURL";

import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faPinterestP } from "@fortawesome/free-brands-svg-icons";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { useApp } from "../../context/AppContext";

const Info = () => {
  const isOrcamentoURL = useOrcamentoURL();
  const isHomeURL = useHomeURL();
  const navigate = useNavigate();
  const { currentProgress, progressLimit, progressVisible } = useApp();

  return (
    <Container $shouldGoUp={isOrcamentoURL}>
      {!isOrcamentoURL && (
        <Brands>
          <BrandIcon
            size="2x"
            color="#744c2f"
            icon={faFacebookF}
            onClick={() => window.open("https://www.facebook.com/arqbrunaferri")}
          />
          <BrandIcon
            size="3x"
            color="#744c2f"
            icon={faInstagram}
            onClick={() => window.open("https://www.instagram.com/arqbrunaferri")}
          />
          <BrandIcon
            size="2x"
            color="#744c2f"
            icon={faPinterestP}
            onClick={() => window.open("https://br.pinterest.com/arqbrunaferri")}
          />
        </Brands>
      )}

      {isOrcamentoURL && (
        <div className={`w-full flex ${progressVisible ? "justify-between" : "justify-center"}`}>
          <Button onClick={() => navigate("/")}>
            <ButtonIcon icon={faLongArrowAltLeft} size="1x" />
            voltar para home
          </Button>

          {progressVisible && <ProgressIndicator>{`${currentProgress} / ${progressLimit}`}</ProgressIndicator>}
        </div>
      )}

      {isHomeURL && <Paragraph>em que posso te ajudar ?</Paragraph>}
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
  ${(props) => props.$shouldGoUp && "-mt-3"}
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
  pb-2
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
  px-4
  py-2
  bg-arq-brown-300
  border-2
  border-arq-brown-500
`;

const Button = tw.span`
  text-arq-brown-500
  text-center
  text-sm sm:text-md
  uppercase
  font-emperatriz
  rounded
  px-4
  py-2
  bg-transparent
  border-2
  border-arq-brown-300

  cursor-pointer
  transform transition duration-300 ease-in-out
  hover:text-arq-brown-50
  hover:bg-arq-brown-300
  hover:border-arq-brown-700
  hover:scale-105
  hover:black
  focus:ring-arq-brown-300
`;

const ProgressIndicator = tw.span`
  text-arq-brown-500
  text-center
  text-sm sm:text-md
  uppercase
  font-emperatriz
  rounded
  px-4
  py-2
  bg-transparent
  border-2
  border-arq-brown-300
  min-w-65

  cursor-auto
  transform transition duration-300 ease-in-out
  hover:text-arq-brown-50
  hover:bg-arq-brown-300
  hover:border-arq-brown-700
  hover:scale-105
  hover:black
  focus:ring-arq-brown-300
`;

const ButtonIcon = tw(FontAwesomeIcon)`
  mr-2
`;
