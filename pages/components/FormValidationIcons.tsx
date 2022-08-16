import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FormValidationIcons = () => {
  return (
    <>
      <FontAwesomeIcon
        icon="asterisk"
        size="xs"
        className="invisible peer-invalid:visible peer-invalid:text-orange-600 absolute xl:-translate-x-[50rem] xl:-translate-y-7 lg:-translate-y-25 lg:-translate-x-[25rem] -translate-x-64 -translate-y-6"
      />
      <FontAwesomeIcon
        icon="check"
        size="xs"
        className="invisible peer-valid:visible  peer-valid:text-green-500 absolute xl:-translate-x-[50rem] xl:-translate-y-7 lg:-translate-y-25 lg:-translate-x-[25rem] -translate-x-64 -translate-y-6"
      />
    </>
  );
};

export default FormValidationIcons;
