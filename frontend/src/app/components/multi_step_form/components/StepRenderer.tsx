// components/multi-step-form/StepRenderer.tsx

import { StepConfig } from "../config/types";
import { FieldRenderer } from "./FieldRenderer";

export const StepRenderer = ({ step }: { step: StepConfig }) => (
  <div className="space-y-6">
    <div className="space-y-2">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        {step.title}
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Please fill in all required fields to continue
      </p>
    </div>
    <div className="space-y-4">
      {step.fields.map((f) => (
        <FieldRenderer key={f.name} field={f} />
      ))}
    </div>
  </div>
);
