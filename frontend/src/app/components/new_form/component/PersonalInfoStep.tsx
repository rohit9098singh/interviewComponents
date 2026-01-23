import React from 'react'

interface PersonalInfoStepProps {
    formData: Record<string, any>
    errors: Record<string, string>
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

const PersonalInfoStep = ({ formData, errors, onChange }: PersonalInfoStepProps) => {
    return (
        <>
            <h2 className="text-xl font-bold mb-4">Personal Information</h2>

            <div className="flex flex-col space-y-1">
                <input 
                    name="firstName"
                    value={formData.firstName || ''}
                    onChange={onChange}
                    placeholder="First Name" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.firstName}
                    </p>
                )}
            </div>

            <div className="flex flex-col space-y-1">
                <input 
                    name="lastName"
                    value={formData.lastName || ''}
                    onChange={onChange}
                    placeholder="Last Name" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.lastName}
                    </p>
                )}
            </div>

            <div className="flex flex-col space-y-1">
                <input 
                    name="email"
                    value={formData.email || ''}
                    onChange={onChange}
                    placeholder="Email" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                    </p>
                )}
            </div>

            <div className="flex flex-col space-y-1">
                <input 
                    name="phone"
                    value={formData.phone || ''}
                    onChange={onChange}
                    placeholder="Phone" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                    </p>
                )}
            </div>
        </>
    )
}

export default PersonalInfoStep
