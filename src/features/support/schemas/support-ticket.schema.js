import { z } from 'zod'

export const supportTicketSchema = z.object({
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(120),
  category: z.string().min(1, 'Category is required'),
  orderNumber: z.string().optional(),
  priority: z.enum(['low', 'medium', 'high', 'urgent']).default('medium'),
  description: z.string().min(20, 'Please describe your inquiry in detail (minimum 20 chars)')
})

export function validateSupportTicket(data) {
  return supportTicketSchema.safeParse(data)
}
