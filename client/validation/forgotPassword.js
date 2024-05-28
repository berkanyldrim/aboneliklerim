import * as yup from "yup";

export const schema = yup.object({
  email: yup
    .string()
    .email("Invalid email address.")
    .required("Email is required."),
});

export const defaultValues = {
  email: "",
};
