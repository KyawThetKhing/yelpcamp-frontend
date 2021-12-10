import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../TextError/TextError";
import "./FileUpload.scss";

const FileUpload = props => {
  const { label, name, ...rest } = props;
  return (
    <div className="fileupload">
      <label className="fileupload__label" htmlFor={name}>
        {label}
      </label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;

          return (
            <>
              <input
                style={{ display: "none" }}
                id={name}
                {...field}
                {...rest}
                value={value}
                onChange={e =>
                  setFieldValue(name, URL.createObjectURL(e.target.files[0]))
                }
              />
              {/* {value && <img src={URL.createObjectURL(value)} alt="preview" />} */}
            </>
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default FileUpload;
