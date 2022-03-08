import React, { useEffect, useState } from "react";

import Step01 from "./step01";
import Step02 from "./step02";
import Step03 from "./step03";
import Step04 from "./step04";
import Step05 from "./step05";

// regex
const IS_EMPTY_STANDARD = /^$/g;
const IS_MORE_THAN_255 = (value) => value?.length > 255;
const IS_EMAIL_STANDARD = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const IS_PHONE_STANDARD = /\+?\(?\d{2,4}\)?[\d\s-]{3,}/g;
const IS_AGE_STANDARD = /^(1[89]|[2-9]\d)$/;
const IS_POSITIVE_NUMBER_STANDARD = /^[1-9]+[0-9]*$/g;

// fields
const STEP_02 = ["entryName", "entryEmail", "entryWhatsapp"];
const STEP_03 = ["entryOccupancy", "entryAge", "entryHowYouMet"];
const STEP_04 = ["entryProjectDescription", "entryProjectCity", "entryProjectType"];
const STEP_04_OPTIONAL = ["entryProjectTypeOther"];
const STEP_05 = ["entryProjectBuilt", "entryProjectArea", "entryProjectEnvironment"];
const STEP_ALL = STEP_02.concat(STEP_03).concat(STEP_04).concat(STEP_05);

// return if there is error or not
const formItemHasError = (name, value, formValues) => {
  const IS_OPTIONAL_FIELD_VISIBLE = STEP_04_OPTIONAL.includes(name) && formValues.entryProjectType === "Outros";

  const IS_FIELD_ANY = STEP_ALL.includes(name);
  if (IS_FIELD_ANY || IS_OPTIONAL_FIELD_VISIBLE) {
    if (new RegExp(IS_EMPTY_STANDARD).test(value)) {
      return true;
    }

    if (IS_MORE_THAN_255(value)) {
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

  const IS_FIELD_POSITIVE_NUMBER = ["entryProjectArea"].includes(name);
  if (IS_FIELD_POSITIVE_NUMBER) {
    if (!new RegExp(IS_POSITIVE_NUMBER_STANDARD).test(value)) {
      return true;
    }

    return false;
  }
};

// renders in the UI the error
const validateFormValue = (name, value, formErrors, setFormErrors, formValues) => {
  const IS_OPTIONAL_FIELD_VISIBLE = STEP_04_OPTIONAL.includes(name) && formValues.entryProjectType === "Outros";

  const IS_FIELD_ANY = STEP_ALL.includes(name);
  if (IS_FIELD_ANY || IS_OPTIONAL_FIELD_VISIBLE) {
    if (new RegExp(IS_EMPTY_STANDARD).test(value)) {
      setFormErrors({ ...formErrors, [name]: { error: true, message: "Digite algum valor." } });
      return;
    }

    if (IS_MORE_THAN_255(value)) {
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

  const IS_FIELD_POSITIVE_NUMBER = ["entryProjectArea"].includes(name);
  if (IS_FIELD_POSITIVE_NUMBER) {
    if (!new RegExp(IS_POSITIVE_NUMBER_STANDARD).test(value)) {
      setFormErrors({ ...formErrors, [name]: { error: true, message: "Digite uma metragem válida." } });
      return;
    }

    return false;
  }
};

// component
const Orcamento = () => {
  const [step, setStep] = useState(1);
  const [isGoingBack, setIsGoingBack] = useState(false);
  const [formStep02, setFormStep02] = useState(false);
  const [formStep03, setFormStep03] = useState(false);
  const [formStep04, setFormStepProjectHasError] = useState(false);
  const [formStep05, setFormStepProjectDetailsHasError] = useState(false);

  const [formValues, setFormValues] = React.useState({
    // STEP_02
    entryName: "",
    entryEmail: "",
    entryWhatsapp: "",
    // STEP_03
    entryOccupancy: "",
    entryAge: "",
    entryHowYouMet: "",
    // STEP_04
    entryProjectDescription: "",
    entryProjectCity: "",
    entryProjectType: "Interiores",
    entryProjectTypeOther: "",
    // STEP_05
    entryProjectBuilt: "Sim",
    entryProjectArea: "",
    entryProjectEnvironment: "",
  });

  const [formErrors, setFormErrors] = React.useState({
    // STEP_02
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
    // STEP_03
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
    // STEP_04
    entryProjectDescription: {
      error: false,
      message: "",
    },
    entryProjectCity: {
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
    // STEP_05
    entryProjectBuilt: {
      error: false,
      message: "",
    },
    entryProjectArea: {
      error: false,
      message: "",
    },
    entryProjectEnvironment: {
      error: false,
      message: "",
    },
  });

  const setFormValue = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
    validateFormValue(name, value, formErrors, setFormErrors, formValues);
  };

  const navigateToStep = (step, isGoingBack) => {
    setStep(step);
    setIsGoingBack(isGoingBack);
  };

  useEffect(() => {
    const formStep02 = Object.entries(formValues)
      .filter((formItem) => STEP_02.includes(formItem[0]))
      .map((formValue) => formItemHasError(formValue[0], formValue[1], formValues))
      .some((error) => error);
    setFormStep02(formStep02);

    const formStep03 = Object.entries(formValues)
      .filter((formItem) => STEP_03.includes(formItem[0]))
      .map((formValue) => formItemHasError(formValue[0], formValue[1], formValues))
      .some((error) => error);
    setFormStep03(formStep03);

    const formStep04 = Object.entries(formValues)
      .filter((formItem) => STEP_04.concat(STEP_04_OPTIONAL).includes(formItem[0]))
      .map((formValue) => formItemHasError(formValue[0], formValue[1], formValues))
      .some((error) => error);
    setFormStepProjectHasError(formStep04);

    const formStep05 = Object.entries(formValues)
      .filter((formItem) => STEP_05.includes(formItem[0]))
      .map((formValue) => formItemHasError(formValue[0], formValue[1], formValues))
      .some((error) => error);
    setFormStepProjectDetailsHasError(formStep05);
  }, [formValues]);

  return (
    <>
      {step === 1 && <Step01 isGoingBack={isGoingBack} navigateToStep={navigateToStep} />}

      {step === 2 && <Step02 isGoingBack={isGoingBack} navigateToStep={navigateToStep} stepHasError={formStep02} formValues={formValues} formErrors={formErrors} setFormValue={setFormValue} />}

      {step === 3 && <Step03 isGoingBack={isGoingBack} navigateToStep={navigateToStep} stepHasError={formStep03} formValues={formValues} formErrors={formErrors} setFormValue={setFormValue} />}

      {step === 4 && <Step04 isGoingBack={isGoingBack} navigateToStep={navigateToStep} stepHasError={formStep04} formValues={formValues} formErrors={formErrors} setFormValue={setFormValue} />}

      {step === 5 && <Step05 isGoingBack={isGoingBack} navigateToStep={navigateToStep} stepHasError={formStep05} formValues={formValues} formErrors={formErrors} setFormValue={setFormValue} />}
    </>
  );
};

export default Orcamento;

Orcamento.displayName = "Orcamento";
