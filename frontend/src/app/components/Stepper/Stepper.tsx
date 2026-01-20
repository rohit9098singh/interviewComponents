
"use client";

import React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming cn utility exists, it usually does in shadcn/ui setups. If not I'll just use template literals or install clsx/tailwind-merge. Based on package.json, clsx and tailwind-merge are present.

interface Step {
    label: string;
}

interface StepperProps {
    steps: Step[];
    currentStep: number; // 1-indexed for easier usage, or 0? user prompt screenshot shows "2" in blue circle. Let's assume 1-based indexing for the "step number" display, but maybe 0-based for array access. Let's make the prop 1-based to match the visual "Step 1", "Step 2".
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
    return (
        <div className="w-full max-w-3xl mx-auto p-4">
            <h2 className="text-2xl font-bold text-center mb-8">Checkout</h2>
            <div className="flex items-center justify-between relative">
                {steps.map((step, index) => {
                    const stepNumber = index + 1;
                    const isCompleted = stepNumber < currentStep;
                    const isCurrent = stepNumber === currentStep;
                    const isUpcoming = stepNumber > currentStep;

                    return (
                        <div key={index} className="flex-1 flex flex-col items-center relative z-10">
                            {/* Line connector - connecting to the NEXT step */}
                            {index < steps.length - 1 && (
                                <div
                                    className={cn(
                                        "absolute top-5 left-1/2 w-full h-[3px] -z-10",
                                        isCompleted ? "bg-green-500" : "bg-gray-200"
                                    )}
                                />
                            )}

                            {/* Circle */}
                            <div
                                className={cn(
                                    "w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors duration-300",
                                    isCompleted
                                        ? "bg-green-500 text-white"
                                        : isCurrent
                                            ? "bg-blue-500 text-white"
                                            : "bg-gray-200 text-gray-700"
                                )}
                            >
                                {isCompleted ? <Check className="w-6 h-6" /> : stepNumber}
                            </div>

                            {/* Label */}
                            <div className="mt-2 text-sm font-medium text-center">
                                <span className={cn(
                                    "transition-colors duration-300",
                                    isCompleted || isCurrent ? "text-black dark:text-white" : "text-gray-500"
                                )}>
                                    {step.label}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Stepper;
