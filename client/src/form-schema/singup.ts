import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

export const singUpSchema = toTypedSchema(
  z.object({
    email: z
      .string({ required_error: "Email is required" })
      .email("Invalid email address"),
    password: z
      .string({ required_error: "Password is required" })
      .min(6, "Password must be at least 6 characters long"),
    confirmPassword: z.string({ required_error: "Confirm password is required" }).min(6, "Password must be at least 6 characters long"),
  }).refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords does not match'
  })
);
