'use client'

import React, { useState } from 'react'
import {
    PersonalInfo,
    professionalInfo,
    billingInfo,
    validatePersonalInfo,
    validateProfessionalInfo,
    validateBillingInfo,
} from '../validation/schema'

import { useMultistepForm } from '../hook/useMultistepForm'
import PersonalInfoStep from './PersonalInfoStep'
import ProfessionalInfoStep from './ProfessionalInfoStep'
import BillingInfoStep from './BillingInfoStep'
import PreviewModal from './PreviewModal'

type FormData = PersonalInfo & professionalInfo & billingInfo

const MultistepForm = () => {
    const { currentStep, next, back, isFirstStep, isLastStep } =
        useMultistepForm(3)

    const [formData, setFormData] = useState<Partial<FormData>>({})
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [showPreviewModal, setShowPreviewModal] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev }
                delete newErrors[name]
                return newErrors
            })
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // Custom validation based on current step
        let validationResult
        if (currentStep === 0) {
            validationResult = validatePersonalInfo(formData)
        } else if (currentStep === 1) {
            validationResult = validateProfessionalInfo(formData)
        } else {
            validationResult = validateBillingInfo(formData)
        }

        // If validation fails, set errors
        if (!validationResult.isValid) {
            setErrors(validationResult.errors)
            return
        }

        // If validation passes, clear errors and continue
        setErrors({})

        if (currentStep === 2) {
            // Open preview modal on last step
            setShowPreviewModal(true)
        } else {
            next()
        }
    }

    const handleFinalSubmit = () => {
        console.log('Final Form Data:', formData)
        alert('Form submitted successfully!')
        setShowPreviewModal(false)
        setFormData({})
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8">
                {/* Progress */}
                <div className="mb-8">
                    <div className="flex justify-between mb-4">
                        {['Personal', 'Professional', 'Billing'].map((label, index) => (
                            <div key={index} className="flex flex-col items-center flex-1">
                                <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${index <= currentStep
                                            ? 'bg-indigo-600 text-white'
                                            : 'bg-gray-300 text-gray-600'
                                        }`}
                                >
                                    {index + 1}
                                </div>
                                <span className="text-xs mt-2">{label}</span>
                            </div>
                        ))}
                    </div>
                    <div className="h-2 bg-gray-200 rounded">
                        <div
                            className="h-full bg-indigo-600 transition-all"
                            style={{ width: `${((currentStep + 1) / 3) * 100}%` }}
                        />
                    </div>
                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* STEP 1 */}
                    {currentStep === 0 && <PersonalInfoStep formData={formData} errors={errors} onChange={handleChange} />}

                    {/* STEP 2 */}
                    {currentStep === 1 && <ProfessionalInfoStep formData={formData} errors={errors} onChange={handleChange} />}

                    {/* STEP 3 */}
                    {currentStep === 2 && <BillingInfoStep formData={formData} errors={errors} onChange={handleChange} />}

                    {/* NAVIGATION */}
                    <div className="flex justify-between pt-6">
                        <button
                            type="button"
                            onClick={back}
                            disabled={isFirstStep}
                            className="px-6 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition"
                        >
                            Previous
                        </button>

                        <button
                            type="submit"
                            className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                        >
                            {isLastStep ? 'Preview & Submit' : 'Next'}
                        </button>
                    </div>
                </form>

                {/* PREVIEW MODAL */}
                <PreviewModal
                    open={showPreviewModal}
                    onOpenChange={setShowPreviewModal}
                    formData={formData}
                    onSubmit={handleFinalSubmit}
                />
            </div>
        </div>
    )
}

export default MultistepForm
