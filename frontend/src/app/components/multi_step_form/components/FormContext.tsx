import { createContext, useContext } from "react";
import { FormData } from "../config/types";

type ContextType = {
  formData: FormData;
  errors: Record<string, string>;
  updateField: (key: string, value: any) => void;
};

export const FormContext = createContext<ContextType | null>(null);

export const useFormContext = () => {
  const ctx = useContext(FormContext);
  if (!ctx) throw new Error("useFormContext outside provider");
  return ctx;
};




