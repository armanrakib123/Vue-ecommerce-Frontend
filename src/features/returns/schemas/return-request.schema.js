import { z } from 'zod'

export const returnRequestSchema = z.object({
  orderNumber: z.string().min(1, 'Order number is required'),
  reason: z.string().min(1, 'Please select a return reason'),
  itemIds: z.array(z.string()).min(1, 'Please select at least one item to return'),
  comments: z.string().optional()
})

export function validateReturnRequest(data) {
  return returnRequestSchema.safeParse(data)
}
