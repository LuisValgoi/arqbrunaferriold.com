import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";

import StepBase from "../_shared_/stepBase";
import { ButtonOutline as ButtonOutlineUI, ButtonPrimary as ButtonPrimaryUI, FieldArea, InputAndLabel, TextAreaAndLabel, Title, UploadAndLabel } from "../ui";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const Step07 = ({ navigateToStep, isGoingBack, formValues, formErrors, setFormValue, stepHasError }) => {
  const [attachments, setAttachments] = useState([]);

  useEffect(() => {
    formValues.entryFinalsPlanta.forEach(async (attachment) => {
      const attachmentDecoded = await getBase64(attachment);
      const attachmentFormat = {
        content: attachmentDecoded,
        filename: attachment.name,
        type: attachment.type,
        disposition: "attachment",
        content_id: attachment.uid,
      };
      setAttachments([...attachments, attachmentFormat]);
    });
  }, [formValues.entryFinalsPlanta]);

  const handleMoveForward = async (event) => {
    event.preventDefault();
    if (stepHasError) return;

    try {
      await fetch("/api/email-orcamento", {
        method: "POST",
        body: JSON.stringify({
          // STEP_02
          entryName: formValues.entryName,
          entryEmail: formValues.entryEmail,
          entryWhatsapp: formValues.entryWhatsapp,
          // STEP_03
          entryOccupancy: formValues.entryOccupancy,
          entryAge: formValues.entryAge,
          entryHowYouMet: formValues.entryHowYouMet,
          // STEP_04
          entryProjectCity: formValues.entryProjectCity,
          entryProjectType: formValues.entryProjectType,
          entryStyle: formValues.entryStyle,
          // STEP_05
          entryProjectBuilt: formValues.entryProjectBuilt,
          entryProjectArea: formValues.entryProjectArea,
          entryProjectEnvironment: formValues.entryProjectEnvironment,
          // STEP_06
          entryProjectPlace: formValues.entryProjectPlace,
          entryProjectPlaceOther: formValues.entryProjectPlaceOther,
          entryProjectRevestimentos: formValues.entryProjectRevestimentos,
          entryProjectRevestimentosOther: formValues.entryProjectRevestimentosOther,
          entryProjectForro: formValues.entryProjectForro,
          entryProjectForroOther: formValues.entryProjectForroOther,
          // STEP_07
          entryFinalsMoveis: formValues.entryFinalsMoveis,
          entryFinalsNotes: formValues.entryFinalsNotes,
          entryFinalsPlanta: attachments,
        }),
      });
    } catch (err) {
      console.error(err);
    }
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
