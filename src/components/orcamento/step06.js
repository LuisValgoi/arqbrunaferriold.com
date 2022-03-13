import React from "react";
import tw from "tailwind-styled-components";

import StepBase from "../stepBase";
import { ButtonOutline as ButtonOutlineUI, ButtonPrimary as ButtonPrimaryUI, FieldArea, InputAndLabel, SelectAndLabel, Title } from "../ui";

const Step06 = ({ navigateToStep, isGoingBack, formValues, formErrors, setFormValue, stepHasError }) => {
  const handleMoveForward = (event) => {
    event.preventDefault();
    if (stepHasError) return;
    navigateToStep(7, false);
  };

  return (
    <StepBase isGoingBack={isGoingBack}>
      <Title>QUANTO À PREFERÊNCIAS...</Title>

      <FieldArea>
        <SelectAndLabel
          onChange={(e) => setFormValue("entryProjectPlace", e.target.value)}
          value={formValues.entryProjectPlace}
          htmlFor="entryProjectPlace"
          label="Qual o tipo do local e o que buscas?"
          options={[
            {
              label: "Local novo + Sem quebra de paredes",
              value: "Local novo + Sem quebra de paredes",
            },
            {
              label: "Local novo + Com quebra de paredes",
              value: "Local novo + Com quebra de paredes",
            },
            {
              label: "Local antigo + Sem quebra de paredes",
              value: "Local antigo + Sem quebra de paredes",
            },
            {
              label: "Local antigo + Com quebra de paredes",
              value: "Local antigo + Com quebra de paredes",
            },
            {
              label: "Outros",
              value: "Outros",
            },
          ]}
        />

        {formValues.entryProjectPlace === "Outros" && (
          <InputAndLabel
            onChange={(e) => setFormValue("entryProjectPlaceOther", e.target.value)}
            value={formValues.entryProjectPlaceOther}
            hasError={formErrors.entryProjectPlaceOther.error}
            errorMessage={formErrors.entryProjectPlaceOther.message}
            inputType="text"
            htmlFor="entryProjectPlaceOther"
            placeholder="Ex: Local Novo + Com pouca quebra de paredes"
            noLabel
          />
        )}
      </FieldArea>

      <FieldArea>
        <SelectAndLabel
          onChange={(e) => setFormValue("entryProjectRevestimentos", e.target.value)}
          value={formValues.entryProjectRevestimentos}
          htmlFor="entryProjectRevestimentos"
          label="Qual o tipo de revestimento e o que buscas?"
          options={[
            {
              label: "Quero substituir os revestimentos antigos por novos",
              value: "Quero substituir os revestimentos antigos por novos",
            },
            {
              label: "Quero manter os revestimentos antigos existente",
              value: "Quero manter os revestimentos antigos existente",
            },
            {
              label: "Quero substituir os revestimentos entregue pela construtora",
              value: "Quero substituir os revestimentos entregue pela construtora",
            },
            {
              label: "Quero manter os revestimentos entregue pela construtora",
              value: "Quero manter os revestimentos entregue pela construtora",
            },
            {
              label: "Outros",
              value: "Outros",
            },
          ]}
        />

        {formValues.entryProjectRevestimentos === "Outros" && (
          <InputAndLabel
            onChange={(e) => setFormValue("entryProjectRevestimentosOther", e.target.value)}
            value={formValues.entryProjectRevestimentosOther}
            hasError={formErrors.entryProjectRevestimentosOther.error}
            errorMessage={formErrors.entryProjectRevestimentosOther.message}
            inputType="text"
            htmlFor="entryProjectRevestimentosOther"
            placeholder="Ex: Quero manter os revestimentos porém gostaria de..."
            noLabel
          />
        )}
      </FieldArea>



      <FieldArea>
        <SelectAndLabel
          onChange={(e) => setFormValue("entryProjectForro", e.target.value)}
          value={formValues.entryProjectForro}
          htmlFor="entryProjectForro"
          label="Qual o tipo de forro e o que buscas?"
          options={[
            {
              label: "Quero manter o forro existente do local",
              value: "Quero manter o forro existente do local",
            },
            {
              label: "Quero colocar forro novo no local",
              value: "Quero colocar forro novo no local",
            },
            {
              label: "Quero deixar o local sem forro",
              value: "Quero deixar o local sem forro",
            },
            {
              label: "Quero melhorar o forro existente do local",
              value: "Quero melhorar o forro existente do local",
            },
            {
              label: "Outros",
              value: "Outros",
            },
          ]}
        />

        {formValues.entryProjectForro === "Outros" && (
          <InputAndLabel
            onChange={(e) => setFormValue("entryProjectForroOther", e.target.value)}
            value={formValues.entryProjectForroOther}
            hasError={formErrors.entryProjectForroOther.error}
            errorMessage={formErrors.entryProjectForroOther.message}
            inputType="text"
            htmlFor="entryProjectForroOther"
            placeholder="Ex: Quero manter o forro existente porém gostaria de..."
            noLabel
          />
        )}
      </FieldArea>

      <ButtonArea>
        <ButtonOutline onClick={() => navigateToStep(5, true)}>Voltar</ButtonOutline>
        <ButtonPrimary $disabled={stepHasError} onClick={handleMoveForward}>
          Continuar
        </ButtonPrimary>
      </ButtonArea>
    </StepBase>
  );
};

export default Step06;

Step06.displayName = "Step06";

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
