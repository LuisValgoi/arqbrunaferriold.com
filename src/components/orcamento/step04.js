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
        <TextAreaAndLabel
          onChange={(e) => setFormValue("entryProjectDescription", e.target.value)}
          value={formValues.entryProjectDescription}
          hasError={formErrors.entryProjectDescription.error}
          errorMessage={formErrors.entryProjectDescription.message}
          inputType="text"
          rows={3}
          htmlFor="entryProjectDescription"
          placeholder="Ex: Gostaria de reformar o meu restaurante..."
          label="Quais são os detalhes do seu projeto?"
        />

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
            },
            {
              label: "Outros",
              value: "Outros",
            },
          ]}
        />

        {formValues.entryProjectType === "Outros" && (
          <InputAndLabel
            onChange={(e) => setFormValue("entryProjectTypeOther", e.target.value)}
            value={formValues.entryProjectTypeOther}
            hasError={formErrors.entryProjectTypeOther.error}
            errorMessage={formErrors.entryProjectTypeOther.message}
            inputType="text"
            htmlFor="entryProjectTypeOther"
            placeholder="Ex: Externo"
            noLabel
          />
        )}
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
