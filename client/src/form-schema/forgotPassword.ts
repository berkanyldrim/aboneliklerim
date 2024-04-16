import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

export const forgotPassowrdSchema = toTypedSchema(
  z.object({
    email: z
      .string({ required_error: "Email is required" })
      .email("Invalid email address"),
  })
);
