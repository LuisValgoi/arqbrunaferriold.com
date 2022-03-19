import { useEncodedAttachments } from "./useEncodedAttachments";

export const useCompleteOrcamento = (formValues) => {
  const encodedAttachments = useEncodedAttachments(formValues.entryFinalsPlanta);

  return {
    submit: async () => {
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
            entryFinalsPlanta: encodedAttachments,
          }),
        });
      } catch (err) {
        console.error(err);
      }
    }
  }
}