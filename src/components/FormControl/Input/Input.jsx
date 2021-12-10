import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../TextError/TextError";
import "./Input.scss";

function Input(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="formControl">
      <label className="formControl__label" htmlFor={name}>
        {label}
      </label>
      <Field className="formControl__field" id={name} name={name} {...rest} />
      <ErrorMessage
        className="formControl__error"
        name={name}
        component={TextError}
      />
    </div>
  );
}

export default Input;
