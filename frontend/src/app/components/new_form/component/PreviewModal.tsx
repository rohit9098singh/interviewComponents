import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import { PersonalInfo, professionalInfo, billingInfo } from '../validation/schema'

type FormData = PersonalInfo & professionalInfo & billingInfo

interface PreviewModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    formData: Partial<FormData>
    onSubmit: () => void
}

const PreviewModal = ({ open, onOpenChange, formData, onSubmit }: PreviewModalProps) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl text-indigo-600">Review Your Information</DialogTitle>
                    <DialogDescription>
                        Please review all information carefully before submitting.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 py-4">
                    {/* Personal Information */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-3 text-gray-700">Personal Information</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <span className="text-gray-500 block mb-1">First Name:</span>
                                <p className="font-medium">{formData.firstName || 'N/A'}</p>
                            </div>
                            <div>
                                <span className="text-gray-500 block mb-1">Last Name:</span>
                                <p className="font-medium">{formData.lastName || 'N/A'}</p>
                            </div>
                            <div>
                                <span className="text-gray-500 block mb-1">Email:</span>
                                <p className="font-medium">{formData.email || 'N/A'}</p>
                            </div>
                            <div>
                                <span className="text-gray-500 block mb-1">Phone:</span>
                                <p className="font-medium">{formData.phone || 'N/A'}</p>
                            </div>
                        </div>
                    </div>

                    {/* Professional Information */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-3 text-gray-700">Professional Information</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <span className="text-gray-500 block mb-1">Company:</span>
                                <p className="font-medium">{formData.company || 'N/A'}</p>
                            </div>
                            <div>
                                <span className="text-gray-500 block mb-1">Position:</span>
                                <p className="font-medium">{formData.position || 'N/A'}</p>
                            </div>
                            <div>
                                <span className="text-gray-500 block mb-1">Experience:</span>
                                <p className="font-medium">{formData.experience || 'N/A'}</p>
                            </div>
                            <div>
                                <span className="text-gray-500 block mb-1">Industry:</span>
                                <p className="font-medium">{formData.industry || 'N/A'}</p>
                            </div>
                        </div>
                    </div>

                    {/* Billing Information */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-3 text-gray-700">Billing Information</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <span className="text-gray-500 block mb-1">Card Number:</span>
                                <p className="font-medium">
                                    {formData.cardNumber 
                                        ? `**** **** **** ${formData.cardNumber.slice(-4)}` 
                                        : 'N/A'}
                                </p>
                            </div>
                            <div>
                                <span className="text-gray-500 block mb-1">Expiry Date:</span>
                                <p className="font-medium">{formData.expiryDate || 'N/A'}</p>
                            </div>
                            <div>
                                <span className="text-gray-500 block mb-1">CVV:</span>
                                <p className="font-medium">***</p>
                            </div>
                        </div>
                    </div>
                </div>

                <DialogFooter>
                    <button
                        type="button"
                        onClick={() => onOpenChange(false)}
                        className="px-6 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
                    >
                        Edit
                    </button>
                    <button
                        type="button"
                        onClick={onSubmit}
                        className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                    >
                        Submit
                    </button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default PreviewModal
