import React, { useEffect, useState } from "react";

import StepWelcome from "./stepWelcome";
import StepDados from "./stepDados";
import StepInfos from "./stepInfos";
import StepProjeto from "./stepProjeto";

const STEP_01 = ["entryName", "entryEmail", "entryWhatsapp"];
const STEP_02 = ["entryOccupancy", "entryAge", "entryHowYouMet"];
const STEP_03 = ["entryProjectDescription", "entryProjectCity", "entryProjectBuilt", "entryProjectType", "entryProjectTypeOther"];

const formItemHasError = (name, value) => {
  const IS_EMPTY_STANDARD = /^$/g;
  const IS_MORE_THAN_255 = value?.length > 255;
  const IS_EMAIL_STANDARD = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const IS_PHONE_STANDARD = /\+?\(?\d{2,4}\)?[\d\s-]{3,}/g;
  const IS_AGE_STANDARD = /^(1[89]|[2-9]\d)$/;

  const IS_FIELD_ANY = STEP_01.concat(STEP_02).concat(STEP_03).includes(name);
  if (IS_FIELD_ANY) {
    if (new RegExp(IS_EMPTY_STANDARD).test(value)) {
      return true;
    }

    if (IS_MORE_THAN_255) {
      return true;
    }

    return false;
  }

  const IS_FIELD_EMAIL = ["entryEmail"].includes(name);
  if (IS_FIELD_EMAIL) {
    if (!new RegExp(IS_EMAIL_STANDARD).test(value)) {
      return true;
    }

    return false;
  }

  const IS_FIELD_WHATSAPP = ["entryWhatsapp"].includes(name);
  if (IS_FIELD_WHATSAPP) {
    if (!new RegExp(IS_PHONE_STANDARD).test(value)) {
      return true;
    }

    return false;
  }

  const IS_FIELD_AGE = ["entryAge"].includes(name);
  if (IS_FIELD_AGE) {
    if (!new RegExp(IS_AGE_STANDARD).test(value)) {
      return true;
    }

    return false;
  }
};

const validateFormValue = (name, value, formErrors, setFormErrors) => {
  const IS_EMPTY_STANDARD = /^$/g;
  const IS_MORE_THAN_255 = value?.length > 255;
  const IS_EMAIL_STANDARD = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const IS_PHONE_STANDARD = /\+?\(?\d{2,4}\)?[\d\s-]{3,}/g;
  const IS_AGE_STANDARD = /^(1[89]|[2-9]\d)$/;

  const IS_FIELD_ANY = STEP_01.concat(STEP_02).concat(STEP_03).includes(name);
  if (IS_FIELD_ANY) {
    if (new RegExp(IS_EMPTY_STANDARD).test(value)) {
      setFormErrors({ ...formErrors, [name]: { error: true, message: "Digite algum valor." } });
      return;
    }

    if (IS_MORE_THAN_255) {
      setFormErrors({ ...formErrors, [name]: { error: true, message: "Digite no máximo 255 caracteres." } });
      return;
    }

    setFormErrors({ ...formErrors, [name]: { error: false, message: "" } });
  }

  const IS_FIELD_EMAIL = ["entryEmail"].includes(name);
  if (IS_FIELD_EMAIL) {
    if (!new RegExp(IS_EMAIL_STANDARD).test(value)) {
      setFormErrors({ ...formErrors, [name]: { error: true, message: "Digite um e-mail válido." } });
      return;
    }

    setFormErrors({ ...formErrors, [name]: { error: false, message: "" } });
  }

  const IS_FIELD_WHATSAPP = ["entryWhatsapp"].includes(name);
  if (IS_FIELD_WHATSAPP) {
    if (!new RegExp(IS_PHONE_STANDARD).test(value)) {
      setFormErrors({ ...formErrors, [name]: { error: true, message: "Digite um número válido." } });
      return;
    }

    setFormErrors({ ...formErrors, [name]: { error: false, message: "" } });
  }

  const IS_FIELD_AGE = ["entryAge"].includes(name);
  if (IS_FIELD_AGE) {
    if (!new RegExp(IS_AGE_STANDARD).test(value)) {
      setFormErrors({ ...formErrors, [name]: { error: true, message: "Você precisa ter 18 anos ou mais." } });
      return;
    }

    setFormErrors({ ...formErrors, [name]: { error: false, message: "" } });
  }
};

const Orcamento = () => {
  const [selectedStep, setSelectedStep] = useState(1);
  const [isGoingBack, setIsGoingBack] = useState(false);
  const [formStepDadosHasError, setFormStepDadosHasError] = useState(false);
  const [formStepInfosHasError, setFormStepInfosHasError] = useState(false);
  const [formStepProjectHasError, setFormStepProjectHasError] = useState(false);

  const [formValues, setFormValues] = React.useState({
    entryName: "",
    entryEmail: "",
    entryWhatsapp: "",
    entryOccupancy: "",
    entryAge: "",
    entryHowYouMet: "",
    entryProjectDescription: "",
    entryProjectCity: "",
    entryProjectBuilt: "Sim",
    entryProjectType: "Interiores",
    entryProjectTypeOther: "",
  });

  const [formErrors, setFormErrors] = React.useState({
    entryName: {
      error: false,
      message: "",
    },
    entryEmail: {
      error: false,
      message: "",
    },
    entryWhatsapp: {
      error: false,
      message: "",
    },
    entryOccupancy: {
      error: false,
      message: "",
    },
    entryAge: {
      error: false,
      message: "",
    },
    entryHowYouMet: {
      error: false,
      message: "",
    },
    entryProjectDescription: {
      error: false,
      message: "",
    },
    entryProjectCity: {
      error: false,
      message: "",
    },
    entryProjectBuilt: {
      error: false,
      message: "",
    },
    entryProjectType: {
      error: false,
      message: "",
    },
    entryProjectTypeOther: {
      error: false,
      message: "",
    },
  });

  const setFormValue = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
    validateFormValue(name, value, formErrors, setFormErrors);
  };

  const navigateToStep = (step, isGoingBack) => {
    setSelectedStep(step);
    setIsGoingBack(isGoingBack);
  };

  useEffect(() => {
    const formStepDadosHasError = Object.entries(formValues)
      .filter((formItem) => STEP_01.includes(formItem[0]))
      .map((formValue) => formItemHasError(formValue[0], formValue[1]))
      .some((error) => error);
    setFormStepDadosHasError(formStepDadosHasError);

    const formStepInfosHasError = Object.entries(formValues)
      .filter((formItem) => STEP_02.includes(formItem[0]))
      .map((formValue) => formItemHasError(formValue[0], formValue[1]))
      .some((error) => error);
    setFormStepInfosHasError(formStepInfosHasError);

    const formStepProjectHasError = Object.entries(formValues)
      .filter((formItem) => STEP_03.includes(formItem[0]))
      .map((formValue) => formItemHasError(formValue[0], formValue[1]))
      .some((error) => error);
    setFormStepProjectHasError(formStepProjectHasError);
  }, [formValues]);

  return (
    <>
      {selectedStep === 1 && <StepWelcome isGoingBack={isGoingBack} navigateToStep={navigateToStep} />}

      {selectedStep === 2 && (
        <StepDados isGoingBack={isGoingBack} navigateToStep={navigateToStep} stepHasError={formStepDadosHasError} formValues={formValues} formErrors={formErrors} setFormValue={setFormValue} />
      )}

      {selectedStep === 3 && (
        <StepInfos isGoingBack={isGoingBack} navigateToStep={navigateToStep} stepHasError={formStepInfosHasError} formValues={formValues} formErrors={formErrors} setFormValue={setFormValue} />
      )}

      {selectedStep === 4 && (
        <StepProjeto isGoingBack={isGoingBack} navigateToStep={navigateToStep} stepHasError={formStepProjectHasError} formValues={formValues} formErrors={formErrors} setFormValue={setFormValue} />
      )}
    </>
  );
};

export default Orcamento;

Orcamento.displayName = "Orcamento";
