import React from 'react'

interface BillingInfoStepProps {
    formData: Record<string, any>
    errors: Record<string, string>
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

const BillingInfoStep = ({ formData, errors, onChange }: BillingInfoStepProps) => {
    return (
        <>
            <h2 className="text-xl font-bold mb-4">Billing Information</h2>

            <div className="flex flex-col space-y-1">
                <input 
                    name="cardNumber"
                    value={formData.cardNumber || ''}
                    onChange={onChange}
                    placeholder="Card Number" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {errors.cardNumber && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.cardNumber}
                    </p>
                )}
            </div>

            <div className="flex flex-col space-y-1">
                <input 
                    name="expiryDate"
                    value={formData.expiryDate || ''}
                    onChange={onChange}
                    placeholder="MM/YY" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {errors.expiryDate && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.expiryDate}
                    </p>
                )}
            </div>

            <div className="flex flex-col space-y-1">
                <input 
                    name="cvv"
                    value={formData.cvv || ''}
                    onChange={onChange}
                    placeholder="CVV" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {errors.cvv && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.cvv}
                    </p>
                )}
            </div>
        </>
    )
}

export default BillingInfoStep
