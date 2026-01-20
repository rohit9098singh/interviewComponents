
"use client";

import React, { useState } from "react";
import Stepper from "./Stepper";
import { Button } from "@/components/ui/button"; // reuse existing UI components if possible, or just standard HTML button

export default function StepperPage() {
    const [currentStep, setCurrentStep] = useState(1); // Start at step 2 as per screenshot example

    const steps = [
        { label: "Customer Info" },
        { label: "Shipping Info" },
        { label: "Payment" },
        { label: "Delivered" },
    ];

    const handleNext = () => {
        if (currentStep < steps.length + 1) { // allow going to "completed" state (step 5) or just max step? Screenshot has 4 steps. Logic in Stepper handles "upcoming". 
            // If we want to show all completed, we might go to step 5. 
            // But usually step 4 is the last "active" step. 
            // Let's explicitly cap it at steps.length for now, or steps.length + 1 if we want a "all done" state.
            if (currentStep < steps.length) {
                setCurrentStep(prev => prev + 1);
            }
        }
    };

    const handlePrev = () => {
        if (currentStep > 1) {
            setCurrentStep(prev => prev - 1);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-10">
            <div className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-md">
                <Stepper steps={steps} currentStep={currentStep} />

                <div className="mt-12 flex justify-center gap-4">
                    <Button
                        onClick={handlePrev}
                        disabled={currentStep === 1}
                        variant="outline"
                    >
                        Previous
                    </Button>
                    <Button
                        onClick={handleNext}
                        disabled={currentStep === steps.length}
                    >
                        Next
                    </Button>
                </div>

                <div className="mt-8 text-center text-gray-500">
                    Current Step State: {currentStep}
                </div>
            </div>
        </div>
    );
}
