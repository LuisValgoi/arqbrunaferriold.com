import React, { useEffect, useState } from "react";

import StepWelcome from "./stepWelcome";
import StepDados from "./stepDados";

const formItemHasError = (name, value) => {
  const IS_EMPTY_STANDARD = /^$/g;
  const IS_MORE_THAN_255 = value?.length > 255;
  const IS_EMAIL_STANDARD = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const IS_PHONE_STANDARD = /\+?\(?\d{2,4}\)?[\d\s-]{3,}/g;
  const IS_AGE_STANDARD = /^(1[89]|[2-9]\d)$/;

  const IS_FIELD_ANY = ["entryName", "entryEmail", "entryAge", "entryWhatsapp"].includes(name);
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

const validateFormValue = (name, value, form, setForm) => {
  const IS_EMPTY_STANDARD = /^$/g;
  const IS_MORE_THAN_255 = value?.length > 255;
  const IS_EMAIL_STANDARD = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const IS_PHONE_STANDARD = /\+?\(?\d{2,4}\)?[\d\s-]{3,}/g;
  const IS_AGE_STANDARD = /^(1[89]|[2-9]\d)$/;

  const IS_FIELD_ANY = ["entryName", "entryEmail", "entryAge", "entryWhatsapp"].includes(name);
  if (IS_FIELD_ANY) {
    if (new RegExp(IS_EMPTY_STANDARD).test(value)) {
      setForm({ ...form, [name]: { error: true, message: "Digite algum valor." } });
      return;
    }

    if (IS_MORE_THAN_255) {
      setForm({ ...form, [name]: { error: true, message: "Digite no máximo 255 caracteres." } });
      return;
    }

    setForm({ ...form, [name]: { error: false, message: "" } });
  }

  const IS_FIELD_EMAIL = ["entryEmail"].includes(name);
  if (IS_FIELD_EMAIL) {
    if (!new RegExp(IS_EMAIL_STANDARD).test(value)) {
      setForm({ ...form, [name]: { error: true, message: "Digite um e-mail válido." } });
      return;
    }

    setForm({ ...form, [name]: { error: false, message: "" } });
  }

  const IS_FIELD_WHATSAPP = ["entryWhatsapp"].includes(name);
  if (IS_FIELD_WHATSAPP) {
    if (!new RegExp(IS_PHONE_STANDARD).test(value)) {
      setForm({ ...form, [name]: { error: true, message: "Digite um número válido." } });
      return;
    }

    setForm({ ...form, [name]: { error: false, message: "" } });
  }

  const IS_FIELD_AGE = ["entryAge"].includes(name);
  if (IS_FIELD_AGE) {
    if (!new RegExp(IS_AGE_STANDARD).test(value)) {
      setForm({ ...form, [name]: { error: true, message: "Você precisa ter 18 anos ou mais." } });
      return;
    }

    setForm({ ...form, [name]: { error: false, message: "" } });
  }
};

const Orcamento = () => {
  const [selectedStep, setSelectedStep] = useState(1);

  const [isGoingBack, setIsGoingBack] = useState(false);

  const [formStepDadosHasError, setFormStepDadosHasError] = useState(false);

  const [form, setForm] = React.useState({
    entryName: {
      value: "",
      error: false,
      message: "",
    },
    entryEmail: {
      value: "",
      error: false,
      message: "",
    },
    entryAge: {
      value: "",
      error: false,
      message: "",
    },
  });

  const setFormValue = (name, value) => {
    setForm({ ...form, [name]: value });
    validateFormValue(name, value, form, setForm);
  };

  const navigateToStep = (step, isGoingBack) => {
    setSelectedStep(step);
    setIsGoingBack(isGoingBack);
  };

  useEffect(() => {
    const formStepDadosHasError = Object.entries(form)
      .filter((formItem) => ["entryName", "entryEmail", "entryAge"].includes(formItem[0]))
      .map((formValue) => formItemHasError(formValue[0], formValue[1].value))
      .some((error) => error);
    setFormStepDadosHasError(formStepDadosHasError);
  }, [form]);

  return (
    <>
      {selectedStep === 1 && <StepWelcome isGoingBack={isGoingBack} navigateToStep={navigateToStep} />}

      {selectedStep === 2 && <StepDados isGoingBack={isGoingBack} navigateToStep={navigateToStep} stepHasError={formStepDadosHasError} form={form} setFormValue={setFormValue} />}
    </>
  );
};

export default Orcamento;

Orcamento.displayName = "Orcamento";
