"use client";

import { useState } from "react";
import { FormContext } from "./FormContext";
import { StepRenderer } from "./StepRenderer";
import { ConfirmationModal } from "./ConfirmationModal";
import { StepConfig } from "../config/types";
import { Button } from "@/components/ui/button";

export const MultiStepForm = ({
  steps,
  onSubmit,
}: {
  steps: StepConfig[];
  onSubmit: (data: any) => void;
}) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<any>({});
  const [errors, setErrors] = useState<any>({});
  const [open, setOpen] = useState(false);

  const current = steps[step];
  const progress = ((step + 1) / steps.length) * 100;

  const next = () => {
    const res = current.schema.safeParse(formData);
    if (!res.success) {
      setErrors(res.error.flatten().fieldErrors);
      return;
    }
    setErrors({});
    step === steps.length - 1 ? setOpen(true) : setStep(step + 1);
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        errors,
        updateField: (k, v) => setFormData({ ...formData, [k]: v }),
      }}
    >
      <div className="w-full max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Step {step + 1} of {steps.length}
            </span>
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Step Content */}
        <div className="animate-in fade-in slide-in-from-right-5 duration-300">
          <StepRenderer step={current} />
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-3 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          {step > 0 && (
            <Button 
              variant="outline" 
              onClick={() => setStep(step - 1)}
              className="flex-1 sm:flex-none"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </Button>
          )}
          <Button 
            onClick={next}
            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
          >
            {step === steps.length - 1 ? "Review & Submit" : "Continue"}
            {step < steps.length - 1 && (
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </Button>
        </div>
      </div>

      <ConfirmationModal
        open={open}
        data={formData}
        steps={steps}
        onCancel={() => setOpen(false)}
        onConfirm={() => onSubmit(formData)}
      />
    </FormContext.Provider>
  );
};
