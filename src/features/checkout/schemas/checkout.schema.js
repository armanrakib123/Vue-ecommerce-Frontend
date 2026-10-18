import { z } from 'zod'
export const checkoutSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  street: z.string().min(3),
  city: z.string().min(2),
  postalCode: z.string().min(2),
})
