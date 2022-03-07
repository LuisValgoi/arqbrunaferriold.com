import React from "react";
import tw from "tailwind-styled-components";

import StepBase from "../stepBase";
import { ButtonOutline as ButtonOutlineUI, ButtonPrimary as ButtonPrimaryUI, InputAndLabel, Title } from "../ui";

const StepDados = ({ navigateToStep, isGoingBack, form, setFormValue, stepHasError }) => {
  const handleMoveForward = (event) => {
    event.preventDefault();
    if (stepHasError) return;
    navigateToStep(3, false);
  };

  return (
    <StepBase isGoingBack={isGoingBack}>
      <Title>MAIS SOBRE VOCÊ</Title>
      <FieldArea>
        <InputAndLabel
          onChange={(e) => setFormValue("entryName", e.target.value)}
          value={form.entryName.value}
          hasError={form.entryName.error}
          errorMessage={form.entryName.message}
          inputType="text"
          htmlFor="entryName"
          placeholder="Ex: John Doe"
          label="Qual o seu nome completo?"
        />
        <InputAndLabel
          onChange={(e) => setFormValue("entryEmail", e.target.value)}
          value={form.entryEmail.value}
          hasError={form.entryEmail.error}
          errorMessage={form.entryEmail.message}
          inputType="email"
          htmlFor="entryEmail"
          placeholder="Ex: johndoe@email.com"
          label="Qual o seu e-mail?"
        />
        <InputAndLabel
          onChange={(e) => setFormValue("entryAge", e.target.value)}
          value={form.entryAge.value}
          hasError={form.entryAge.error}
          errorMessage={form.entryAge.message}
          inputType="number"
          htmlFor="entryAge"
          placeholder="Ex: 24"
          label="Qual a sua idade?"
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

const FieldArea = tw.div`
  min-w-320
`;

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
