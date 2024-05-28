import * as yup from "yup";

export const schema = yup.object({
  email: yup
    .string()
    .email("Invalid email address.")
    .required("Email is required."),
  password: yup.string().required("Password is required."),
});

export const defaultValues = {
  email: "",
  password: "",
};
