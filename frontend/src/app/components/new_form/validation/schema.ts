import { z } from "zod"

export const personalInfoSchema = z.object({
    firstName: z.string().min(1, "first name is required"),
    lastName: z.string().min(1, "first name is required"),
    email: z.string().email("Invlaid email address"),
    phone: z.string().min(10, "Phone number is too short")

});


export const professionalInfoSchema = z.object({
    company: z.string().min(1, "Company is required"),
    position: z.string().min(1, "position is required"),
    experience: z.enum(["0-2", "3-5", "6-10", "10+"]),
    industry: z.string().min(1, "Industry is required")
})

export const billingInfoSchema = z.object({
    cardNumber: z.string().min(16, "Card number must be 16 digits").max(16, "card numbr must not be greater than 16"),
    expiryDate: z.string().min(4, "Invalid expiry date"),
    cvv: z.string().min(3, "Invalid cvv").max(4)
})


export type PersonalInfo = z.infer<typeof personalInfoSchema>
export type professionalInfo = z.infer<typeof professionalInfoSchema>
export type billingInfo = z.infer<typeof billingInfoSchema>

export type StepFormData=PersonalInfo |  professionalInfo | billingInfo