import { z } from 'zod'
export const shippingAddressSchema = z.object({
  street: z.string().min(3),
  city: z.string().min(2)
})
