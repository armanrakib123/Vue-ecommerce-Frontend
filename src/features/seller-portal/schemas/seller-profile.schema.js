import { z } from 'zod'

export const sellerProfileSchema = z.object({
  storeName: z.string().min(2, 'Store name must be at least 2 characters'),
  legalEntity: z.string().min(2, 'Legal business name is required'),
  taxId: z.string().min(4, 'Valid Tax ID/EIN required'),
  supportEmail: z.string().email('Invalid email address'),
  website: z.string().url('Invalid URL format').optional().or(z.literal(''))
})

export function validateSellerProfile(data) {
  return sellerProfileSchema.safeParse(data)
}
