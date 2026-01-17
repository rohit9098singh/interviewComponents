
import { personalSchema,  addressSchema,
  preferenceSchema, } from "./schema";
import { StepConfig } from "./types";

export const steps: StepConfig[] = [
  {
    id: "personal",
    title: "Personal Info",
    schema: personalSchema,
    fields: [
      { name: "firstName", label: "First Name", type: "text" },
      { name: "lastName", label: "Last Name", type: "text" },
      { name: "email", label: "Email", type: "email" },
    ],
  },
  {
    id: "address",
    title: "Address",
    schema: addressSchema,
    fields: [
      { name: "city", label: "City", type: "text" },
      { name: "zip", label: "ZIP Code", type: "text" },
    ],
  },
  {
    id: "plan",
    title: "Plan",
    schema: preferenceSchema,
    fields: [
        { name: "plan", label: "Plan (basic/premium/enterprise)", type: "text" }
    ],
  },
];
