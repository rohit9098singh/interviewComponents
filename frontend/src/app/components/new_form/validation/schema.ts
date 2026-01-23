// Custom Validation - No External Libraries

export type PersonalInfo = {
    firstName: string
    lastName: string
    email: string
    phone: string
}

export type professionalInfo = {
    company: string
    position: string
    experience: "0-2" | "3-5" | "6-10" | "10+" | ""
    industry: string
}

export type billingInfo = {
    cardNumber: string
    expiryDate: string
    cvv: string
}

export type StepFormData = PersonalInfo | professionalInfo | billingInfo

// Custom Validation Functions
export const validatePersonalInfo = (data: any): { isValid: boolean; errors: Record<string, string> } => {
    const errors: Record<string, string> = {}

    if (!data.firstName || data.firstName.trim().length === 0) {
        errors.firstName = "First name is required"
    }

    if (!data.lastName || data.lastName.trim().length === 0) {
        errors.lastName = "Last name is required"
    }

    if (!data.email || data.email.trim().length === 0) {
        errors.email = "Email is required"
    } else {
        // Email regex validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(data.email)) {
            errors.email = "Invalid email address"
        }
    }

    if (!data.phone || data.phone.trim().length === 0) {
        errors.phone = "Phone is required"
    } else if (data.phone.length < 10) {
        errors.phone = "Phone number is too short"
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    }
}

export const validateProfessionalInfo = (data: any): { isValid: boolean; errors: Record<string, string> } => {
    const errors: Record<string, string> = {}

    if (!data.company || data.company.trim().length === 0) {
        errors.company = "Company is required"
    }

    if (!data.position || data.position.trim().length === 0) {
        errors.position = "Position is required"
    }

    if (!data.experience || data.experience.trim().length === 0) {
        errors.experience = "Experience is required"
    } else {
        const validExperience = ["0-2", "3-5", "6-10", "10+"]
        if (!validExperience.includes(data.experience)) {
            errors.experience = "Invalid experience value"
        }
    }

    if (!data.industry || data.industry.trim().length === 0) {
        errors.industry = "Industry is required"
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    }
}

export const validateBillingInfo = (data: any): { isValid: boolean; errors: Record<string, string> } => {
    const errors: Record<string, string> = {}

    if (!data.cardNumber || data.cardNumber.trim().length === 0) {
        errors.cardNumber = "Card number is required"
    } else if (data.cardNumber.length < 16) {
        errors.cardNumber = "Card number must be 16 digits"
    } else if (data.cardNumber.length > 16) {
        errors.cardNumber = "Card number must not be greater than 16"
    }

    if (!data.expiryDate || data.expiryDate.trim().length === 0) {
        errors.expiryDate = "Expiry date is required"
    } else if (data.expiryDate.length < 4) {
        errors.expiryDate = "Invalid expiry date"
    }

    if (!data.cvv || data.cvv.trim().length === 0) {
        errors.cvv = "CVV is required"
    } else if (data.cvv.length < 3) {
        errors.cvv = "Invalid CVV"
    } else if (data.cvv.length > 4) {
        errors.cvv = "CVV must not be greater than 4"
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    }
}