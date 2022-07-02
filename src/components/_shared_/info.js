import React from 'react';
import tw from 'tailwind-styled-components';
import styled from 'styled-components';
import { useOrcamentoURL, useHomeURL } from '../../hooks/useURL';

import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useApp } from '../../context/AppContext';

const Info = () => {
  const isOrcamentoURL = useOrcamentoURL();
  const isHomeURL = useHomeURL();
  const navigate = useNavigate();
  const { currentProgress, progressLimit, progressVisible } = useApp();

  if (isOrcamentoURL) {
    return (
      <article className='w-320'>
        <Button onClick={() => navigate('/')}>
          <FontAwesomeIcon icon={faArrowLeft} size="1x" />
        </Button>

        {progressVisible && <ProgressIndicator>{`${currentProgress} / ${progressLimit}`}</ProgressIndicator>}
      </article>
    );
  }

  return (
    <Container $shouldGoUp={isOrcamentoURL}>
      {!isOrcamentoURL && (
        <Brands>
          <BrandIcon
            size="2x"
            color="#744c2f"
            icon={faFacebookF}
            onClick={() => window.open('https://www.facebook.com/arqbrunaferri')}
          />
          <BrandIcon
            size="3x"
            color="#744c2f"
            icon={faInstagram}
            onClick={() => window.open('https://www.instagram.com/arqbrunaferri')}
          />
          <BrandIcon
            size="2x"
            color="#744c2f"
            icon={faPinterestP}
            onClick={() => window.open('https://br.pinterest.com/arqbrunaferri')}
          />
        </Brands>
      )}

      {isHomeURL && <Paragraph>em que posso te ajudar ?</Paragraph>}
    </Container>
  );
};

export default Info;

Info.displayName = 'Info';

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
  absolute
  top-16
  left-0

  flex
  h-10
  w-10
  items-center
  justify-center

  rounded-full
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
  absolute
  top-16
  right-0

  flex
  h-10
  w-10
  items-center
  justify-center

  rounded-full
  bg-transparent
  border-2
  border-arq-green-300
  cursor-auto

  text-center
  text-arq-green-400
  text-center
  text-sm sm:text-md
  uppercase
  font-emperatriz

  transform transition duration-300 ease-in-out
  hover:text-arq-green-100
  hover:bg-arq-green-300
  hover:border-arq-green-400
  hover:scale-105
  hover:black
`;
