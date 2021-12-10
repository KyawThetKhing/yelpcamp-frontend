import * as Yup from "yup";

const newCampSchema = Yup.object({
  name: Yup.string()
    .required("Name is Required")
    .max(50, "Not More than 50 characters"),
  price: Yup.string().required("Price is Required"),
  imageUrl: Yup.string().required("Image is Required"),
  description: Yup.string()
    .required("Description is Required")
    .max(150, "Not more than 150 characters"),
  comments: Yup.array().nullable()
});

export default newCampSchema;
