import tw from 'tailwind-styled-components';

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

export const Title = tw.h1`
  text-arq-brown-300
  font-bold
  text-center
  uppercase
  rounded
  py-1
  font-emperatriz
  font-black
  text-2xl
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

export const ButtonOutline = tw(ButtonBase)`
  text-arq-brown-500
  bg-transparent
  border-arq-brown-300
  hover:bg-arq-brown-300
  hover:scale-105
  hover:text-arq-brown-50
  hover:border-arq-brown-700
  focus:ring 
  focus:ring-arq-brown-300
`;

export const ButtonPrimary = tw(ButtonBase)`
  ${(props) => props.$disabled ? `
    bg-gray-200
    cursor-not-allowed
    text-gray-400
    border-gray-400
    border
  ` : `
    text-white
    bg-arq-brown-300
    border-arq-brown-800
    focus:ring 
    focus:ring-arq-brown-800
    hover:bg-arq-brown-800
    hover:scale-105
    hover:text-white
    hover:border-black
  `}
`;

export const Label = tw.label`
  font-fira-sans
  text-sm md:text-md
  text-gray-700
  font-black
  mb-2
`;

export const Input = tw.input`
  focus:ring-arq-brown-500
  focus:border-arq-brown-500
  block
  w-full
  pl-4
  pr-4
  text-xs
  rounded-md
  
  ${(props) => (props.$hasError ? "border-red-500" : "border-arq-brown-200")}
`;

export const FieldArea = tw.div`
  min-w-320
`;

export const InputAndLabel = ({ onChange, value, htmlFor, inputType, label, placeholder, hasError, errorMessage }) => {
  return (
    <div className="text-left mb-2">
      <Label htmlFor={htmlFor}>{label}</Label>

      <div className="mt-1 relative rounded-md shadow-sm">
        <Input $hasError={hasError} onChange={onChange} value={value} type={inputType} name={htmlFor} id={htmlFor} placeholder={placeholder} />
      </div>

      {hasError && <p className="mt-2 text-red-500 text-xs italic">{errorMessage}</p>}
    </div>
  );
}