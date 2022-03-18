import React from "react";
import { DeleteOutlined, InboxOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import styled from "styled-components";
import tw from "tailwind-styled-components";
import ReactInputMask from "react-input-mask";

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
  text-gray-700
  whitespace-pre-line
  font-emperatriz
  font-fira-sans-extra-light
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
  font-fira-sans-extra-light
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
  placeholder-gray-500 placeholder-opacity-50
  
  ${(props) => (props.$hasError ? "border-red-500" : "border-arq-brown-200")}
`;

export const InputMask = tw(ReactInputMask)`
  focus:ring-arq-brown-500
  focus:border-arq-brown-500
  block
  w-full
  pl-4
  py-3
  pr-4
  text-xs
  rounded-md
  placeholder-gray-500 placeholder-opacity-25
  
  ${(props) => (props.$hasError ? "border-red-500" : "border-arq-brown-200")}
`;

export const Select = tw.select`
  focus:ring-arq-brown-300 
  focus:border-arq-brown-300 
  block
  w-full
  pl-4
  py-3
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
  placeholder-gray-500 placeholder-opacity-50
  
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
  max-w-320
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

export const InputMaskAndLabel = ({ onChange, mask, value, htmlFor, inputType, label, placeholder, hasError, errorMessage, noLabel = false, ...props }) => {
  return (
    <div className="text-left mb-2">
      {!noLabel && <Label htmlFor={htmlFor}>{label}</Label>}

      <div className="mt-1 relative rounded-md shadow-sm">
        <InputMask {...props} mask={mask} $hasError={hasError} onChange={onChange} value={value} type={inputType} name={htmlFor} id={htmlFor} placeholder={placeholder} />
      </div>

      {hasError && <p className="mt-2 text-red-500 text-xs italic">{errorMessage}</p>}
    </div>
  );
};

export const RadioButtonGroupAndLabel = ({ onChange, hasError, errorMessage, name, label, options, value, formItemsInLine = true }) => {
  const wrapperClasses = formItemsInLine ? "mt-1 relative flex" : "mt-1 relative flex flex-col";
  const itemClasses = formItemsInLine ? "form-check form-check-inline" : "form-check mt-2";

  return (
    <div className="text-left mb-2 mt-4 flex flex-col">
      <Label $noMarginBottom>{label}</Label>

      <div className={wrapperClasses}>
        {options.map((option) => (
          <div key={option.value} className={itemClasses}>
            <RadioButton type="radio" id={option.value} name={name} value={option.value} checked={option.value === value} onChange={onChange} />
            <Label className="ml-2" htmlFor={option.value}>
              {option.label}
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
    <div className="text-left mb-2">
      <Label htmlFor={htmlFor}>{label}</Label>

      <div className="mt-1 relative rounded-md shadow-sm">
        <Select $hasError={hasError} onChange={onChange} value={value} name={htmlFor} id={htmlFor}>
          {options.map((option) => (
            <option value={option.value} key={option.label}>
              {option.label}
            </option>
          ))}
        </Select>
      </div>

      {hasError && <p className="mt-2 text-red-500 text-xs italic">{errorMessage}</p>}
    </div>
  );
};

export const UploadAndLabel = ({ htmlFor, fileList, label, hasError, errorMessage, onChange }) => {
  const UploadDragger = styled(Upload.Dragger)`
    border: 1px dashed #91735f;
    text-align: center;
    transition: all 0.2s;
    padding: 1rem;
    background: #fff;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    border-radius: 4px;

    & p {
      font-size: smaller;
    }

    &:hover {
      border: 1px dashed #000;
    }
  `;

  const UploadIcon = styled(InboxOutlined)`
    color: #91735f;
    font-size: 30px;
  `;

  const Wrapper = styled.div`
    margin-bottom: 0.5rem;
    text-align: left;

    & span.ant-upload-span {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    }

    & span.ant-upload-list-item-name {
      font-size: smaller;
      margin-left: 4px;
      margin-right: 4px;
      min-width: 277px;
    }

    & div.ant-upload-text-icon {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & span.ant-upload-list-item-card-actions {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & div.ant-upload-list {
      margin-top: 12px;
    }
  `;

  const [fileListInternal, setFileListInternal] = React.useState([]);

  React.useEffect(() => {
    if (fileList) setFileListInternal(fileList);
  }, [fileList]);

  const handleRemove = (file) => {
    const newFileList = fileListInternal.filter((f) => f.uid !== file.uid);
    setFileListInternal(newFileList);
    onChange(newFileList);
  };

  const handleBeforeUpload = (file) => {
    const newFileList = [...fileList, file];
    setFileListInternal(newFileList);
    onChange(newFileList);
  };

  return (
    <Wrapper>
      <Label htmlFor={htmlFor}>{label}</Label>

      <UploadDragger
        accept="image/*,.pdf"
        name={htmlFor}
        fileList={fileListInternal}
        onRemove={handleRemove}
        beforeUpload={handleBeforeUpload}
        showUploadList={{
          showDownloadIcon: false,
          showRemoveIcon: true,
          removeIcon: <DeleteOutlined />,
        }}
      >
        <p className="ant-upload-drag-icon">
          <UploadIcon />
        </p>
        <p className="ant-upload-text">Clique ou arraste o arquivo para esta área para fazer upload.</p>
      </UploadDragger>

      {hasError && <p className="mt-2 text-red-500 text-xs italic">{errorMessage}</p>}
    </Wrapper>
  );
};
