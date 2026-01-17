"use client";

import { MultiStepForm } from "./components/MultiStepForm";
import { steps } from "./config/steps";

export default function MultiStepFormPage() {
  const handleSubmit = (data: any) => {
    console.log("Form submitted:", data);
    alert(`Form submitted successfully! Check console for details.`);
    // Here you can send data to your API
    // await fetch('/api/submit', { method: 'POST', body: JSON.stringify(data) })
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Multi-Step Form
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Complete all steps to submit your information
          </p>
        </div>
        
        <MultiStepForm steps={steps} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
