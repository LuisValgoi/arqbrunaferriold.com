import React from "react";
import tw from "tailwind-styled-components";

import StepBase from "../stepBase";
import { ButtonOutline as ButtonOutlineUI, ButtonPrimary as ButtonPrimaryUI, FieldArea, InputAndLabel, InputMaskAndLabel, Title } from "../ui";

const Step02 = ({ navigateToStep, isGoingBack, formValues, formErrors, setFormValue, stepHasError }) => {
  const handleMoveForward = (event) => {
    event.preventDefault();
    if (stepHasError) return;
    navigateToStep(3, false);
  };

  return (
    <StepBase isGoingBack={isGoingBack}>
      <Title>QUANTO AO SEU CONTATO</Title>

      <FieldArea>
        <InputAndLabel
          onChange={(e) => setFormValue("entryName", e.target.value)}
          value={formValues.entryName}
          hasError={formErrors.entryName.error}
          errorMessage={formErrors.entryName.message}
          inputType="text"
          htmlFor="entryName"
          placeholder="Ex: João da Silva"
          label="Qual o seu nome completo?"
        />
      </FieldArea>

      <FieldArea>
        <InputAndLabel
          onChange={(e) => setFormValue("entryEmail", e.target.value)}
          value={formValues.entryEmail}
          hasError={formErrors.entryEmail.error}
          errorMessage={formErrors.entryEmail.message}
          inputType="email"
          htmlFor="entryEmail"
          placeholder="Ex: joaodasilva@email.com"
          label="Qual o seu e-mail?"
        />
      </FieldArea>

      <FieldArea>
        <InputMaskAndLabel
          onChange={(e) => setFormValue("entryWhatsapp", e.target.value)}
          value={formValues.entryWhatsapp}
          hasError={formErrors.entryWhatsapp.error}
          errorMessage={formErrors.entryWhatsapp.message}
          inputType="tel"
          htmlFor="entryWhatsapp"
          mask="(99) 99999-9999"
          placeholder="Ex: (51) 99707-9543"
          label="Qual o seu WhatsApp?"
        />
      </FieldArea>

      <ButtonArea>
        <ButtonOutline onClick={() => navigateToStep(1, true)}>Voltar</ButtonOutline>
        <ButtonPrimary $disabled={stepHasError} onClick={handleMoveForward}>
          Continuar
        </ButtonPrimary>
      </ButtonArea>
    </StepBase>
  );
};

export default Step02;

Step02.displayName = "Step02";

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
