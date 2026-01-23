import React from 'react'

interface ProfessionalInfoStepProps {
    formData: Record<string, any>
    errors: Record<string, string>
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

const ProfessionalInfoStep = ({ formData, errors, onChange }: ProfessionalInfoStepProps) => {
    return (
        <>
            <h2 className="text-xl font-bold mb-4">Professional Information</h2>

            <div className="flex flex-col space-y-1">
                <input 
                    name="company"
                    value={formData.company || ''}
                    onChange={onChange}
                    placeholder="Company" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {errors.company && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.company}
                    </p>
                )}
            </div>

            <div className="flex flex-col space-y-1">
                <input 
                    name="position"
                    value={formData.position || ''}
                    onChange={onChange}
                    placeholder="Position" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {errors.position && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.position}
                    </p>
                )}
            </div>

            <div className="flex flex-col space-y-1">
                <select 
                    name="experience"
                    value={formData.experience || ''}
                    onChange={onChange}
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
                        {errors.experience}
                    </p>
                )}
            </div>

            <div className="flex flex-col space-y-1">
                <input 
                    name="industry"
                    value={formData.industry || ''}
                    onChange={onChange}
                    placeholder="Industry" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {errors.industry && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.industry}
                    </p>
                )}
            </div>
        </>
    )
}

export default ProfessionalInfoStep
