import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../TextError/TextError";
import "./TextArea.scss";

function TextArea({ label, name, ...rest }) {
  return (
    <div className="formControl">
      <label className="formControl__label" htmlFor={name}>
        {label}
      </label>
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage
        className="formControl__error"
        name={name}
        component={TextError}
      />
    </div>
  );
}

export default TextArea;
