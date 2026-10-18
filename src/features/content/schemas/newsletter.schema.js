import { z } from 'zod'

export const newsletterSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email address format')
})

export function validateNewsletter(data) {
  return newsletterSchema.safeParse(data)
}
