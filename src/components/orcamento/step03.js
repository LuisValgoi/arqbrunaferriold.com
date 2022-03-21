import React from "react";
import tw from "tailwind-styled-components";

import StepBase from "../_shared_/stepBase";
import { ButtonOutline as ButtonOutlineUI, ButtonPrimary as ButtonPrimaryUI, FieldArea, InputAndLabel, InputMaskAndLabel, Title } from "../ui";

const Step03 = ({ navigateToStep, isGoingBack, formValues, formErrors, setFormValue, stepHasError }) => {
  const handleMoveForward = (event) => {
    event.preventDefault();
    if (stepHasError) return;
    navigateToStep(4, false);
  };

  return (
    <StepBase isGoingBack={isGoingBack}>
      <Title>QUANTO À VOCÊ</Title>

      <FieldArea>
        <InputAndLabel
          onChange={(e) => setFormValue("entryOccupancy", e.target.value)}
          value={formValues.entryOccupancy}
          hasError={formErrors.entryOccupancy.error}
          errorMessage={formErrors.entryOccupancy.message}
          inputType="text"
          htmlFor="entryOccupancy"
          placeholder="Ex: Advogado"
          label="Qual a sua profissão?"
        />
      </FieldArea>

      <FieldArea>
        <InputMaskAndLabel
          onChange={(e) => setFormValue("entryAge", e.target.value)}
          value={formValues.entryAge}
          hasError={formErrors.entryAge.error}
          errorMessage={formErrors.entryAge.message}
          inputType="tel"
          htmlFor="entryAge"
          mask="99 \anos"
          placeholder="Ex: 24 anos"
          label="Qual a sua idade?"
        />
      </FieldArea>

      <FieldArea>
        <InputAndLabel
          onChange={(e) => setFormValue("entryHowYouMet", e.target.value)}
          value={formValues.entryHowYouMet}
          hasError={formErrors.entryHowYouMet.error}
          errorMessage={formErrors.entryHowYouMet.message}
          inputType="text"
          htmlFor="entryHowYouMet"
          placeholder="Ex: Instagram, Facebook, Indicação..."
          label="Como conheceu o nosso escritório?"
        />
      </FieldArea>

      <ButtonArea>
        <ButtonOutline onClick={() => navigateToStep(2, true)}>Voltar</ButtonOutline>
        <ButtonPrimary $disabled={stepHasError} onClick={handleMoveForward}>
          Continuar
        </ButtonPrimary>
      </ButtonArea>
    </StepBase>
  );
};

export default Step03;

Step03.displayName = "Step03";

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
