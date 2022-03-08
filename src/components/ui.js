import tw from "tailwind-styled-components";

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
  ${(props) =>
    props.$disabled
      ? `
    bg-gray-200
    cursor-not-allowed
    text-gray-400
    border-gray-400
    border
  `
      : `
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
  ${(props) => (props.$noMarginBottom ? "mb-0" : "mb-1")}
`;

export const Input = tw.input`
  focus:ring-arq-brown-500
  focus:border-arq-brown-500
  block
  w-full
  pl-4
  py-3
  pr-4
  text-xs
  rounded-md
  
  ${(props) => (props.$hasError ? "border-red-500" : "border-arq-brown-200")}
`;

export const Select = tw.select`
  focus:ring-arq-brown-300 
  focus:border-arq-brown-300 
  block
  w-full
  pl-4
  pr-4
  text-xs
  rounded-md
  
  ${(props) => (props.$hasError ? "border-red-500" : "border-arq-brown-300")}
`;

export const TextArea = tw.textarea`
  focus:ring-arq-brown-500
  focus:border-arq-brown-500
  block
  w-full
  pl-4
  py-3
  pr-4
  text-xs
  rounded-md
  resize-none
  
  ${(props) => (props.$hasError ? "border-red-500" : "border-arq-brown-200")}
`;

export const RadioButton = tw.input`
  form-check-input 
  appearance-none
  rounded-full
  h-4
  w-4
  border
  border-arq-brown-200
  bg-white
  checked:bg-arq-brown-100
  checked:border-arq-brown-300
  focus:outline-none
  transform transition duration-300 ease-in-out
  cursor-pointer
`;

export const FieldArea = tw.div`
  min-w-320
`;

export const InputAndLabel = ({ onChange, value, htmlFor, inputType, label, placeholder, hasError, errorMessage, noLabel = false, ...props }) => {
  return (
    <div className="text-left mb-2">
      {!noLabel && <Label htmlFor={htmlFor}>{label}</Label>}

      <div className="mt-1 relative rounded-md shadow-sm">
        <Input {...props} $hasError={hasError} onChange={onChange} value={value} type={inputType} name={htmlFor} id={htmlFor} placeholder={placeholder} />
      </div>

      {hasError && <p className="mt-2 text-red-500 text-xs italic">{errorMessage}</p>}
    </div>
  );
};

export const RadioButtonGroupAndLabel = ({ onChange, hasError, errorMessage, name, label, options, value }) => {
  return (
    <div className="text-left mb-2 mt-4 flex flex-col">
      <Label $noMarginBottom>{label}</Label>

      <div className="mt-1 relative flex">
        {options.map((option) => (
          <div key={option.value} className="form-check form-check-inline">
            <RadioButton type="radio" id={option.value} name={name} value={option.value} checked={option.value === value} onChange={onChange} />
            <Label className="ml-1" htmlFor={option.value}>
              {option.display}
            </Label>
          </div>
        ))}
      </div>

      {hasError && <p className="mt-2 text-red-500 text-xs italic">{errorMessage}</p>}
    </div>
  );
};

export const TextAreaAndLabel = ({ onChange, value, htmlFor, inputType, label, rows = 3, placeholder, hasError, errorMessage }) => {
  return (
    <div className="text-left mb-2">
      <Label htmlFor={htmlFor}>{label}</Label>

      <div className="mt-1 relative rounded-md shadow-sm">
        <TextArea rows={rows} $hasError={hasError} onChange={onChange} value={value} type={inputType} name={htmlFor} id={htmlFor} placeholder={placeholder} />
      </div>

      {hasError && <p className="mt-2 text-red-500 text-xs italic">{errorMessage}</p>}
    </div>
  );
};

export const SelectAndLabel = ({ onChange, value, htmlFor, label, options, hasError, errorMessage }) => {
  return (
    <div className="text-left mb-4">
      <Label htmlFor={htmlFor}>{label}</Label>

      <Select $hasError={hasError} onChange={onChange} value={value} name={htmlFor} id={htmlFor}>
        {options.map((option) => (
          <option value={option.value} key={option.label}>
            {option.label}
          </option>
        ))}
      </Select>

      {hasError && <p className="mt-2 text-red-500 text-xs italic">{errorMessage}</p>}
    </div>
  );
}