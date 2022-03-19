import { useState } from "react";
import { useEncodedAttachments } from "./useEncodedAttachments";

export const useCompleteOrcamento = (formValues) => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(undefined);
  const [error, setError] = useState(undefined);
  const encodedAttachments = useEncodedAttachments(formValues.entryFinalsPlanta);
  const payload = {
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
    entryFinalsPlanta: encodedAttachments,
  };

  return {
    submit: async () => {
      try {
        setIsLoading(true);

        const resultContato = await fetch("/api/contato-orcamento", {
          method: "POST",
          body: JSON.stringify(payload),
        });

        const resultOrcamento = await fetch("/api/backup-orcamento", {
          method: "POST",
          body: JSON.stringify(payload),
        });

        if (resultContato.status === 404 || resultOrcamento.status === 404) {
          throw Error();
        }
      } catch (err) {
        setError(true);
        setSuccess(undefined);
      } finally {
        setIsLoading(false);
      }

      setError(undefined);
      setSuccess(true);
    },
    isLoading,
    error,
    success,
  };
};
