import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FormValidationIcons = () => {
  return (
    <>
      <FontAwesomeIcon
        icon="asterisk"
        size="xs"
        className="invisible peer-invalid:visible peer-invalid:text-orange-600 absolute lg:-translate-x-[51rem] lg:-translate-y-7 -translate-x-72 -translate-y-6"
      />
      <FontAwesomeIcon
        icon="check"
        size="xs"
        className="invisible peer-valid:visible  peer-valid:text-green-500 absolute lg:-translate-x-[51rem] lg:-translate-y-7 -translate-x-72 -translate-y-6"
      />
    </>
  );
};

export default FormValidationIcons;
