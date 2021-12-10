import React from "react";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";

import Topbar from "components/Topbar";
import FormikControl from "components/FormControl/FormikControl";
import newCampSchema from "schemas/newCampSchema";
import "./NewCampPage.scss";
import { createCampInfo } from "redux/apiCalls";

const NewCampPage = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    price: "",
    imageUrl: "",
    description: "",
    comments: []
  };

  const onSubmit = (values, submitProps) => {
    console.log("Onsubmit", values);
    createCampInfo(dispatch, values);
    submitProps.setSubmitting(false);
    submitProps.resetForm();
  };

  return (
    <div className="newcampPage">
      <div className="newcampPage__topbar">
        <Topbar isBack={false} />
      </div>
      <div className="newcampPage__formWrapper">
        <div className="newCampPage__title">Add New Campground</div>
        <Formik
          initialValues={initialValues}
          validationSchema={newCampSchema}
          onSubmit={onSubmit}
          className="loginForm"
        >
          {formik => (
            <Form className="loginForm">
              <FormikControl
                control="input"
                type="text"
                name="name"
                label="Campground Name"
                className="newcampPage__input"
                placeholder="Seven Sisters Waterfall"
              />
              <FormikControl
                control="input"
                type="text"
                name="price"
                label="Price"
                className="newcampPage__input"
                placeholder="$149"
              />
              <FormikControl
                control="input"
                type="text"
                name="imageUrl"
                label="Image"
                className="newcampPage__input"
                placeholder="https://www.google.com/url"
              />
              <FormikControl
                control="textarea"
                name="description"
                label="Description"
                cols="20"
                rows="10"
                placeholder="he Seven Sisters is the 39th tallest waterfall in Norway. The 410-metre tall waterfall consists of seven separate streams, and the tallest of the seven has a free fall that measures 250 metres"
              />
              <button
                className="newcampPage__btn"
                type="submit"
                disabled={!formik.isValid && formik.isSubmitting}
              >
                Add Campground
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default NewCampPage;
