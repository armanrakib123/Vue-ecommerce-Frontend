import { z } from 'zod'

export const productSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  price: z.number().positive('Price must be greater than 0'),
  sku: z.string().min(3, 'SKU is required'),
})
