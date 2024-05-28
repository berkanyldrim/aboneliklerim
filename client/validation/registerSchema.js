import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("Name is required."),
  surname: yup.string().required("Surname is required."),
  email: yup
    .string()
    .email("Invalid email address.")
    .required("Email is required."),
  password: yup.string().required("Password is required."),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match."),
});

export const defaultValues = {
  name: "",
  surname: "",
  email: "",
  password: "",
  passwordConfirm: "",
};
