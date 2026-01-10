import { z } from 'zod'

export const emailSchema = z.object({
    email: z.string().email("Enter a valid email address")
})

export const otpSchema = z.object({
    otp: z.string().length(6, 'OTP must be 6 characters long')
})

export type EmailSchema = z.infer<typeof emailSchema>
export type OTPSchema = z.infer<typeof otpSchema>