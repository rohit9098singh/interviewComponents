// components/multi-step-form/ConfirmationModal.tsx
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { StepConfig } from "../config/types";

export const ConfirmationModal = ({
  open,
  data,
  steps,
  onConfirm,
  onCancel,
}: {
  open: boolean;
  data: any;
  steps: StepConfig[];
  onConfirm: () => void;
  onCancel: () => void;
}) => (
  <Dialog open={open} onOpenChange={onCancel}>
    <DialogContent className="max-w-lg">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold">
          Review Your Information
        </DialogTitle>
        <DialogDescription>
          Please review the information below before submitting.
        </DialogDescription>
      </DialogHeader>

      <div className="space-y-4 max-h-96 overflow-y-auto">
        {steps.map((step, idx) => (
          <div key={step.id}>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              {step.title}
            </h3>
            <div className="space-y-3 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              {step.fields.map((f) => (
                <div key={f.name} className="flex justify-between items-start">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {f.label}:
                  </span>
                  <span className="text-sm text-gray-900 dark:text-white font-medium text-right max-w-xs break-words">
                    {data[f.name] || "—"}
                  </span>
                </div>
              ))}
            </div>
            {idx < steps.length - 1 && <Separator className="my-4" />}
          </div>
        ))}
      </div>

      <div className="flex gap-3 mt-6">
        <Button 
          variant="outline" 
          onClick={onCancel}
          className="flex-1"
        >
          Cancel
        </Button>
        <Button 
          onClick={onConfirm}
          className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Confirm & Submit
        </Button>
      </div>
    </DialogContent>
  </Dialog>
);
