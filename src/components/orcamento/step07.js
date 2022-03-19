import React from "react";
import tw from "tailwind-styled-components";

import StepBase from "../_shared_/stepBase";
import { useCompleteOrcamento } from "../../hooks/useServiceOrcamento";
import { ButtonOutline as ButtonOutlineUI, ButtonPrimary as ButtonPrimaryUI, FieldArea, InputAndLabel, TextAreaAndLabel, Title, UploadAndLabel } from "../ui";

const Step07 = ({ navigateToStep, isGoingBack, formValues, formErrors, setFormValue, stepHasError }) => {
  const { submit } = useCompleteOrcamento(formValues);

  const handleMoveForward = async (event) => {
    event.preventDefault();
    if (stepHasError) return;
    submit();
  };

  return (
    <StepBase isGoingBack={isGoingBack}>
      <Title>ÚLTIMA ETAPA...</Title>

      <FieldArea>
        <InputAndLabel
          onChange={(e) => setFormValue("entryFinalsMoveis", e.target.value)}
          value={formValues.entryFinalsMoveis}
          hasError={formErrors.entryFinalsMoveis.error}
          errorMessage={formErrors.entryFinalsMoveis.message}
          inputType="text"
          htmlFor="entryFinalsMoveis"
          placeholder="Ex: Microondas, Hack, Nenhum..."
          label="Quais itens gostaria de manter no projeto?"
        />
      </FieldArea>

      <FieldArea>
        <TextAreaAndLabel
          onChange={(e) => setFormValue("entryFinalsNotes", e.target.value)}
          value={formValues.entryFinalsNotes}
          hasError={formErrors.entryFinalsNotes.error}
          errorMessage={formErrors.entryFinalsNotes.message}
          inputType="text"
          rows={3}
          htmlFor="entryFinalsNotes"
          placeholder="Ex: Usar ripas, com neutras, bem minimalista..."
          label="Mais alguma informação extra?"
        />
      </FieldArea>

      <FieldArea>
        <UploadAndLabel
          onChange={(fileList) => setFormValue("entryFinalsPlanta", fileList)}
          fileList={formValues.entryFinalsPlanta}
          hasError={formErrors.entryFinalsPlanta.error}
          errorMessage={formErrors.entryFinalsPlanta.message}
          htmlFor="entryFinalsPlanta"
          label="Anexe as plantas do local"
        />
      </FieldArea>

      <ButtonArea>
        <ButtonOutline onClick={() => navigateToStep(6, true)}>Voltar</ButtonOutline>
        <ButtonPrimary $disabled={stepHasError} onClick={handleMoveForward}>
          Finalizar
        </ButtonPrimary>
      </ButtonArea>
    </StepBase>
  );
};

export default Step07;

Step07.displayName = "Step07";

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
