// components/multi-step-form/types.ts
import { ZodSchema } from "zod";

export type FieldConfig = {
  name: string;
  label: string;
  type: "text" | "email";
};

export type StepConfig = {
  id: string;
  title: string;
  schema: ZodSchema;
  fields: FieldConfig[];
};

export type FormData = Record<string, any>;
