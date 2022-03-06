import tw from 'tailwind-styled-components';

export const Title = tw.h1`
  text-arq-brown-300
  font-bold
  text-center
  uppercase
  rounded
  py-1
  font-emperatriz
  font-black
  text-xl
`;

export const Paragraph = tw.p`
  text-center
  max-w-500
  text-arq-brown-500
  whitespace-pre-line
  font-emperatriz
  font-fira-sans
  font-black
`;

const ButtonBase = tw.button`
  w-full
  py-2
  px-10
  mb-4
  flex
  justify-center
  items-center
  uppercase
  font-emperatriz
  rounded
  border-2
  transform transition duration-300 ease-in-out
`;

export const ButtonOutline = tw(ButtonBase)`
  text-arq-brown-500
  bg-transparent
  border-arq-brown-300
  hover:bg-arq-brown-300
  hover:scale-105
  hover:text-arq-brown-50
  hover:border-arq-brown-700
`;

export const ButtonPrimary = tw(ButtonBase)`
  text-white
  bg-arq-brown-300
  border-arq-brown-800
  hover:bg-arq-brown-800
  hover:scale-105
  hover:text-white
  hover:border-black
`;
