import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

export const subscriptionSchema = toTypedSchema(
  z.object({
    subscription: z
      .object({
        name: z.string({ required_error: "Name is required" }),


      }),
      
    price: z
      .string({ required_error: "Price is required" }),
    // paymentDate: z.date({ required_error: "Payment date is required",invalid_type_error:"Invalid date" }),
    // autoCycle: z.boolean({ required_error: "Auto cycle is required" }),
    // note: z.string({ required_error: "Note is required" }).nullable(),
    // currency:z.object({})
  })
);

export const initialValues = {
  subscription: {
    name: "",

  },
  price: "",
  // paymentDate: "",
  // autoCycle: false,
  // note: "",
  // currency: {}
};

