import React from "react";
import tw from "tailwind-styled-components";

import StepBase from "../stepBase";
import { ButtonOutline as ButtonOutlineUI, ButtonPrimary as ButtonPrimaryUI, FieldArea, InputAndLabel, Title } from "../ui";

const StepDados = ({ navigateToStep, isGoingBack, formValues, formErrors, setFormValue, stepHasError }) => {
  const handleMoveForward = (event) => {
    event.preventDefault();
    if (stepHasError) return;
    navigateToStep(3, false);
  };

  return (
    <StepBase isGoingBack={isGoingBack}>
      <Title>SOBRE VOCÊ</Title>
      <FieldArea>
        <InputAndLabel
          onChange={(e) => setFormValue("entryName", e.target.value)}
          value={formValues.entryName}
          hasError={formErrors.entryName.error}
          errorMessage={formErrors.entryName.message}
          inputType="text"
          htmlFor="entryName"
          placeholder="Ex: John Doe"
          label="Qual o seu nome completo?"
        />
        <InputAndLabel
          onChange={(e) => setFormValue("entryEmail", e.target.value)}
          value={formValues.entryEmail}
          hasError={formErrors.entryEmail.error}
          errorMessage={formErrors.entryEmail.message}
          inputType="email"
          htmlFor="entryEmail"
          placeholder="Ex: johndoe@email.com"
          label="Qual o seu e-mail?"
        />
        <InputAndLabel
          onChange={(e) => setFormValue("entryWhatsapp", e.target.value)}
          value={formValues.entryWhatsapp}
          hasError={formErrors.entryWhatsapp.error}
          errorMessage={formErrors.entryWhatsapp.message}
          inputType="tel"
          htmlFor="entryWhatsapp"
          placeholder="Ex: +5551997079544"
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

export default StepDados;

StepDados.displayName = "StepDados";

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
