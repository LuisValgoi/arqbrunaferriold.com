import React, { useEffect } from "react";
import tw from "tailwind-styled-components";

import StepBase from "../_shared_/stepBase";
import { useCompleteOrcamento } from "../../hooks/useServiceOrcamento";
import { ButtonOutline as ButtonOutlineUI, ButtonPrimary as ButtonPrimaryUI, FieldArea, SelectAndLabel, TextAreaAndLabel, Title, UploadAndLabel } from "../ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Step07 = ({ navigateToStep, isGoingBack, formValues, formErrors, setFormValue, stepHasError }) => {
  const navigate = useNavigate();
  const { isLoading, success, error, submit } = useCompleteOrcamento(formValues);

  const handleMoveForward = async (event) => {
    event.preventDefault();
    if (stepHasError) return;
    submit();
  };

  useEffect(() => {
    const shouldGoToSuccessPage = success === true && error === undefined;
    const shouldGoToErrorPage = error === true && success === undefined;

    if (shouldGoToSuccessPage) {
      navigate("/orcamento/finalizado", { state: { isValid: true } });
    } else if (shouldGoToErrorPage) {
      navigate("/orcamento/erro", { state: { isValid: true } });
    }
  }, [success, error, navigate]);

  return (
    <StepBase isGoingBack={isGoingBack}>
      <Title>ÚLTIMA ETAPA...</Title>

      <FieldArea>
        <SelectAndLabel
          onChange={(e) => setFormValue("entryBudget", e.target.value)}
          value={formValues.entryBudget}
          htmlFor="entryBudget"
          label="Qual o seu budget para o projeto?"
          options={[
            {
              label: "R$ 3.000,00 - R$ 10.000,00",
              value: "R$ 3.000,00 - R$ 10.000,00",
            },
            {
              label: "R$ 10.000,00 - R$ 20.000,00",
              value: "R$ 10.000,00 - R$ 20.000,00",
            },
            {
              label: "R$ 20.000,00 - R$ 50.000,00",
              value: "R$ 20.000,00 - R$ 50.000,00",
            },
            {
              label: "Mais de R$ 50.000,00",
              value: "Mais de R$ 50.000,00",
            }
          ]}
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
          placeholder="Ex: Manter os eletrodomésticos..."
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
        <ButtonPrimary $loading={isLoading} $disabled={stepHasError} onClick={handleMoveForward}>
          {isLoading && <ButtonIcon icon={faSpinner} spin size="1x" />}
          {isLoading ? "Carregando" : "Finalizar"}
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

const ButtonIcon = tw(FontAwesomeIcon)`
  mr-2
`;
