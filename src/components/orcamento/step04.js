import React from "react";
import tw from "tailwind-styled-components";

import StepBase from "../stepBase";
import { ButtonOutline as ButtonOutlineUI, ButtonPrimary as ButtonPrimaryUI, FieldArea, InputAndLabel, SelectAndLabel, TextAreaAndLabel, Title } from "../ui";

const Step04 = ({ navigateToStep, isGoingBack, formValues, formErrors, setFormValue, stepHasError }) => {
  const handleMoveForward = (event) => {
    event.preventDefault();
    if (stepHasError) return;
    navigateToStep(5, false);
  };

  return (
    <StepBase isGoingBack={isGoingBack}>
      <Title>QUANTO AO PROJETO</Title>

      <FieldArea>
        <InputAndLabel
          onChange={(e) => setFormValue("entryProjectCity", e.target.value)}
          value={formValues.entryProjectCity}
          hasError={formErrors.entryProjectCity.error}
          errorMessage={formErrors.entryProjectCity.message}
          inputType="text"
          htmlFor="entryProjectCity"
          placeholder="Ex: Porto Alegre/RS"
          label="Em qual cidade será feito o projeto?"
        />
      </FieldArea>

      <FieldArea>
        <SelectAndLabel
          onChange={(e) => setFormValue("entryProjectType", e.target.value)}
          value={formValues.entryProjectType}
          htmlFor="entryProjectType"
          label="Que tipo de projeto você precisa?"
          options={[
            {
              label: "Interiores",
              value: "Interiores",
            },
            {
              label: "Arquitetônico",
              value: "Arquitetônico",
            },
            {
              label: "Arquitetônico + Interiores",
              value: "Arquitetônico + Interiores",
            }
          ]}
        />
      </FieldArea>

      <FieldArea>
        <InputAndLabel
          onChange={(e) => setFormValue("entryStyle", e.target.value)}
          value={formValues.entryStyle}
          hasError={formErrors.entryStyle.error}
          errorMessage={formErrors.entryStyle.message}
          inputType="text"
          htmlFor="entryStyle"
          placeholder="Ex: Minimalista, Clássico, Industrial..."
          label="Qual seria o seu estilo?"
        />
      </FieldArea>

      <ButtonArea>
        <ButtonOutline onClick={() => navigateToStep(3, true)}>Voltar</ButtonOutline>
        <ButtonPrimary $disabled={stepHasError} onClick={handleMoveForward}>
          Continuar
        </ButtonPrimary>
      </ButtonArea>
    </StepBase>
  );
};

export default Step04;

Step04.displayName = "Step04";

const ButtonArea = tw.div`
  grid
  grid-cols-2
  gap-4
`;

const ButtonOutline = tw(ButtonOutlineUI)`
  mt-4
  max-w-150
`;

const ButtonPrimary = tw(ButtonPrimaryUI)`
  mt-4
  max-w-150
`;
