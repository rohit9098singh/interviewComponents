// components/multi-step-form/schemas.ts
import { z } from "zod";

export const personalSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
});

export const addressSchema = z.object({
  city: z.string().min(1, "City required"),
  zip: z.string().regex(/^\d{5}$/, "ZIP must be 5 digits"),
});

export const preferenceSchema = z.object({
  plan: z.enum(["basic", "premium", "enterprise"]),
  notes: z.string().optional(),
});
