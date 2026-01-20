'use client'

import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
    PersonalInfo,
    professionalInfo,
    billingInfo,
    personalInfoSchema,
    professionalInfoSchema,
    billingInfoSchema,
} from '../validation/schema'

import { useMultistepForm } from '../hook/useMultistepForm'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'

type FormData = PersonalInfo & professionalInfo & billingInfo

const MultistepForm = () => {
    const { currentStep, next, back, isFirstStep, isLastStep } =
        useMultistepForm(3)

    const [formData, setFormData] = useState<Partial<FormData>>({})
    const [showPreviewModal, setShowPreviewModal] = useState(false)

    const getCurrentSchema = () => {
        if (currentStep === 0) return personalInfoSchema
        if (currentStep === 1) return professionalInfoSchema
        return billingInfoSchema
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<any>({
        resolver: zodResolver(getCurrentSchema()),
        mode: 'onChange',
    })

    useEffect(() => {
        reset(formData)
    }, [currentStep, formData, reset])

    const onSubmit: SubmitHandler<any> = (data) => {
        const updatedData = { ...formData, ...data }
        setFormData(updatedData)

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
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* STEP 1 */}
                    {currentStep === 0 && (
                        <>
                            <h2 className="text-xl font-bold mb-4">Personal Information</h2>

                            <div className="flex flex-col space-y-1">
                                <input 
                                    {...register('firstName')} 
                                    placeholder="First Name" 
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                {errors.firstName && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {String(errors.firstName.message)}
                                    </p>
                                )}
                            </div>

                            <div className="flex flex-col space-y-1">
                                <input 
                                    {...register('lastName')} 
                                    placeholder="Last Name" 
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                {errors.lastName && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {String(errors.lastName.message)}
                                    </p>
                                )}
                            </div>

                            <div className="flex flex-col space-y-1">
                                <input 
                                    {...register('email')} 
                                    placeholder="Email" 
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {String(errors.email.message)}
                                    </p>
                                )}
                            </div>

                            <div className="flex flex-col space-y-1">
                                <input 
                                    {...register('phone')} 
                                    placeholder="Phone" 
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                {errors.phone && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {String(errors.phone.message)}
                                    </p>
                                )}
                            </div>
                        </>
                    )}

                    {/* STEP 2 */}
                    {currentStep === 1 && (
                        <>
                            <h2 className="text-xl font-bold mb-4">Professional Information</h2>

                            <div className="flex flex-col space-y-1">
                                <input 
                                    {...register('company')} 
                                    placeholder="Company" 
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                {errors.company && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {String(errors.company.message)}
                                    </p>
                                )}
                            </div>

                            <div className="flex flex-col space-y-1">
                                <input 
                                    {...register('position')} 
                                    placeholder="Position" 
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                {errors.position && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {String(errors.position.message)}
                                    </p>
                                )}
                            </div>

                            <div className="flex flex-col space-y-1">
                                <select 
                                    {...register('experience')} 
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    <option value="">Experience</option>
                                    <option value="0-2">0-2</option>
                                    <option value="3-5">3-5</option>
                                    <option value="6-10">6-10</option>
                                    <option value="10+">10+</option>
                                </select>
                                {errors.experience && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {String(errors.experience.message)}
                                    </p>
                                )}
                            </div>

                            <div className="flex flex-col space-y-1">
                                <input 
                                    {...register('industry')} 
                                    placeholder="Industry" 
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                {errors.industry && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {String(errors.industry.message)}
                                    </p>
                                )}
                            </div>
                        </>
                    )}

                    {/* STEP 3 */}
                    {currentStep === 2 && (
                        <>
                            <h2 className="text-xl font-bold mb-4">Billing Information</h2>

                            <div className="flex flex-col space-y-1">
                                <input 
                                    {...register('cardNumber')} 
                                    placeholder="Card Number" 
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                {errors.cardNumber && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {String(errors.cardNumber.message)}
                                    </p>
                                )}
                            </div>

                            <div className="flex flex-col space-y-1">
                                <input 
                                    {...register('expiryDate')} 
                                    placeholder="MM/YY" 
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                {errors.expiryDate && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {String(errors.expiryDate.message)}
                                    </p>
                                )}
                            </div>

                            <div className="flex flex-col space-y-1">
                                <input 
                                    {...register('cvv')} 
                                    placeholder="CVV" 
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                {errors.cvv && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {String(errors.cvv.message)}
                                    </p>
                                )}
                            </div>
                        </>
                    )}

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
                <Dialog open={showPreviewModal} onOpenChange={setShowPreviewModal}>
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
                                onClick={() => setShowPreviewModal(false)}
                                className="px-6 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                onClick={handleFinalSubmit}
                                className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                            >
                                Submit
                            </button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}

export default MultistepForm
