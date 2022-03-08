import React from "react";
import tw from "tailwind-styled-components";

import StepBase from "../stepBase";
import { ButtonOutline as ButtonOutlineUI, ButtonPrimary as ButtonPrimaryUI, FieldArea, InputAndLabel, RadioButtonGroupAndLabel, Title } from "../ui";

const Step05 = ({ navigateToStep, isGoingBack, formValues, formErrors, setFormValue, stepHasError }) => {
  const handleMoveForward = (event) => {
    event.preventDefault();
    if (stepHasError) return;
    navigateToStep(6, false);
  };

  return (
    <StepBase isGoingBack={isGoingBack}>
      <Title>QUANTO À ÁREA...</Title>

      <FieldArea>
        <RadioButtonGroupAndLabel
          onChange={(e) => setFormValue("entryProjectBuilt", e.target.value)}
          hasError={formErrors.entryProjectBuilt.error}
          errorMessage={formErrors.entryProjectBuilt.message}
          label="O imóvel já encontra-se construído?"
          name="entryProjectBuilt"
          value={formValues.entryProjectBuilt}
          options={[
            {
              value: "Sim",
              display: "Sim",
            },
            {
              value: "Não",
              display: "Não",
            },
          ]}
        />

        <InputAndLabel
          onChange={(e) => setFormValue("entryProjectArea", e.target.value)}
          value={formValues.entryProjectArea}
          hasError={formErrors.entryProjectArea.error}
          errorMessage={formErrors.entryProjectArea.message}
          inputType="number"
          htmlFor="entryProjectArea"
          placeholder="Ex: 24"
          label="Qual a área em m² a ser projetada?"
          min={1}
        />

        <InputAndLabel
          onChange={(e) => setFormValue("entryProjectEnvironment", e.target.value)}
          value={formValues.entryProjectEnvironment}
          hasError={formErrors.entryProjectEnvironment.error}
          errorMessage={formErrors.entryProjectEnvironment.message}
          inputType="text"
          htmlFor="entryProjectEnvironment"
          placeholder="Ex: Sala, Cozinha e Lavabo"
          label="Quais ambientes o projeto teria?"
        />
      </FieldArea>

      <ButtonArea>
        <ButtonOutline onClick={() => navigateToStep(4, true)}>Voltar</ButtonOutline>
        <ButtonPrimary $disabled={stepHasError} onClick={handleMoveForward}>
          Continuar
        </ButtonPrimary>
      </ButtonArea>
    </StepBase>
  );
};

export default Step05;

Step05.displayName = "Step05";

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
