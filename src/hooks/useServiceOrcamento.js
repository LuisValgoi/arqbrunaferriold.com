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
    entryCannotMiss: formValues.entryCannotMiss,
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
    entryBudget: formValues.entryBudget,
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

        const URL = `https://docs.google.com/forms/d/e/1FAIpQLSeVgF8xsZp_KWO12M9_c-lEDNM-oG2vS9c4FWPSYn3arBW8IQ/formResponse?usp=pp_url&entry.1839056621=${formValues.entryName}&entry.163323378=${formValues.entryEmail}&entry.1605181147=${formValues.entryAge}&entry.956957064=${formValues.entryOccupancy}&entry.1689608432=${formValues.entryWhatsapp}&entry.1090549890=${formValues.entryHowYouMet}&entry.734680111=${formValues.entryProjectCity}&entry.1092662459=${formValues.entryProjectBuilt}&entry.547802146=${formValues.entryProjectType}&entry.570513031=${formValues.entryProjectArea}&entry.722497747=${formValues.entryProjectEnvironment}&entry.48717484=${formValues.entryProjectPlace === "Outros" ? formValues.entryProjectPlaceOther : formValues.entryProjectPlace}&entry.390066382=${formValues.entryProjectRevestimentos === "Outros" ? formValues.entryProjectRevestimentosOther : formValues.entryProjectRevestimentos}&entry.122732658=${formValues.entryProjectForro === "Outros" ? formValues.entryProjectForroOther : formValues.entryProjectForro}&entry.2123598535=${encodeURI(formValues.entryBudget)}&entry.316321790=${formValues.entryCannotMiss}&entry.1058871605=${formValues.entryFinalsNotes}&submit=Submit`;
        const resultForm = await fetch(URL.replace(/\s/g, "+"), {
          method: "GET",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });

        if (
          resultContato.status === 404 ||
          resultContato.statusCode === 404 ||
          resultOrcamento.status === 404 ||
          resultOrcamento.statusCode === 404 ||
          resultForm.status === 404 ||
          resultForm.statusCode === 404
        ) {
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
