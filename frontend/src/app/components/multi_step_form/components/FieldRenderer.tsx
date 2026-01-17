import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldConfig } from "../config/types";
import { useFormContext } from "./FormContext";

export const FieldRenderer = ({ field }: { field: FieldConfig }) => {
  const { formData, updateField, errors } = useFormContext();

  const hasError = errors[field.name];
  const errorMessage = hasError ? (Array.isArray(hasError) ? hasError[0] : hasError) : null;

  return (
    <div className="space-y-2">
      <Label 
        htmlFor={field.name} 
        className="text-sm font-medium text-gray-700 dark:text-gray-200"
      >
        {field.label}
        {field.type === "email" && <span className="text-red-500 ml-1">*</span>}
      </Label>
      <Input
        id={field.name}
        type={field.type}
        value={formData[field.name] || ""}
        onChange={(e) => updateField(field.name, e.target.value)}
        placeholder={`Enter ${field.label.toLowerCase()}`}
        className={`transition-all duration-200 ${
          hasError 
            ? "border-red-500 focus-visible:ring-red-500" 
            : "focus-visible:ring-blue-500"
        }`}
        aria-invalid={hasError ? "true" : "false"}
        aria-describedby={hasError ? `${field.name}-error` : undefined}
      />
      {errorMessage && (
        <p 
          id={`${field.name}-error`}
          className="text-sm text-red-600 dark:text-red-400 flex items-center gap-1 animate-in fade-in slide-in-from-top-1 duration-200"
          role="alert"
        >
          <svg 
            className="w-4 h-4" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path 
              fillRule="evenodd" 
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" 
              clipRule="evenodd" 
            />
          </svg>
          {errorMessage}
        </p>
      )}
    </div>
  );
};