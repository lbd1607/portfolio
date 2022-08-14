import React, { BaseSyntheticEvent, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import FormValidationIcons from "./FormValidationIcons";

type ElementType = "input" | "textarea";

type TextFieldProps = {
  elementType: ElementType;
  fieldLabel: string;
  fieldName: string;
  type?: string;
  isRequired: boolean;
  maxLength: number;
};

const TextField = ({
  elementType,
  fieldLabel,
  fieldName,
  type,
  isRequired,
  maxLength,
}: TextFieldProps) => {
  return (
    <label className="block p-5">
      <span className="block text-lg text-coolwhite pb-2">{fieldLabel}</span>
      {elementType === "input" ? (
        <input
          name={fieldName}
          type={type ?? "text"}
          className="peer bg-primary-light text-coolwhite p-2 rounded-sm focus:focus-visible:outline-none focus:focus-visible:ring-2 focus:focus-visible:ring-accent w-full"
          required={isRequired}
          maxLength={maxLength}
        />
      ) : elementType === "textarea" ? (
        <textarea
          name="message"
          className={
            "peer bg-primary-light text-coolwhite p-2 rounded-sm focus:focus-visible:outline-none focus:focus-visible:ring-2 focus:focus-visible:ring-accent w-full h-80"
          }
          required
          maxLength={1000}
        />
      ) : (
        <></>
      )}
      <FormValidationIcons />
    </label>
  );
};

type ButtonType = "button" | "submit" | "reset";

type ButtonProps = {
  type: ButtonType;
  label: string;
};

const Button = ({ type, label }: ButtonProps) => {
  return (
    <div className="grid grid-rows-2 p-5">
      <button
        type={type}
        className="h-10 bg-accent hover:bg-accentdark w-20 rounded-sm"
      >
        {label}
      </button>
    </div>
  );
};

const Form = ({ children }: any) => {
  const recaptchaRef = useRef<any>();

  const handleOnSubmit = async (event: BaseSyntheticEvent) => {
    event.preventDefault();

    const token = await recaptchaRef.current.executeAsync();

    const formData: Record<string, string> = {};
    Array.from(event.target).forEach((field: any) => {
      if (!field.name) return;
      formData[field.name] = field.value;
      formData.token = token;
    });
    fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    recaptchaRef.current.reset(); //Needs to be reset each time so the recaptcha can run on each sumbit
    event.target.reset();
  };
  return (
    <form method="POST" onSubmit={handleOnSubmit}>
      {children}
      <div
        className="g-recaptcha"
        data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        data-callback="onSubmit"
        data-size="invisible"
      >
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ""}
          size="invisible"
          ref={recaptchaRef}
          theme="dark"
        />
      </div>
    </form>
  );
};

export default Form;

Form.TextField = TextField;
Form.Button = Button;
