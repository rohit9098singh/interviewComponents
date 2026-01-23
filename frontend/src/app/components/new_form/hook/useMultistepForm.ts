import { useState } from 'react';

export const useMultistepForm = (totalSteps: number) => {
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    setCurrentStep((prev) => (prev < totalSteps - 1 ? prev + 1 : prev));
  };

  const back = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === totalSteps - 1;

  return {
    currentStep,
    next,
    back,
    isFirstStep,
    isLastStep,
  };
};
