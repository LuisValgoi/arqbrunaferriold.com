import React from 'react';
import tw from 'tailwind-styled-components';

import StepBase from '../_shared_/stepBase';
import {
  ButtonOutline as ButtonOutlineUI,
  ButtonPrimary as ButtonPrimaryUI,
  FieldArea,
  InputAndLabel,
  SelectAndLabel,
  Title,
} from '../ui';

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
          onChange={(e) => setFormValue('entryProjectCity', e.target.value)}
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
          onChange={(e) => setFormValue('entryProjectType', e.target.value)}
          value={formValues.entryProjectType}
          htmlFor="entryProjectType"
          label="Que tipo de projeto você precisa?"
          options={[
            {
              label: 'Interiores',
              value: 'Interiores',
            },
            {
              label: 'Arquitetônico',
              value: 'Arquitetônico',
            },
            {
              label: 'Arquitetônico + Interiores',
              value: 'Arquitetônico + Interiores',
            },
          ]}
        />
      </FieldArea>

      <FieldArea>
        <InputAndLabel
          onChange={(e) => setFormValue('entryCannotMiss', e.target.value)}
          value={formValues.entryCannotMiss}
          hasError={formErrors.entryCannotMiss.error}
          errorMessage={formErrors.entryCannotMiss.message}
          inputType="text"
          htmlFor="entryCannotMiss"
          placeholder="Ex: Quadros, Decoração, Papel de parede..."
          label="O que não pode faltar na sua casa?"
        />
      </FieldArea>

      <ButtonArea>
        <ButtonOutline onClick={() => navigateToStep(3, true)}>Anterior</ButtonOutline>
        <ButtonPrimary $disabled={stepHasError} onClick={handleMoveForward}>
          Próxima
        </ButtonPrimary>
      </ButtonArea>
    </StepBase>
  );
};

export default Step04;

Step04.displayName = 'Step04';

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
