import { z } from 'zod'

export const reviewSchema = z.object({
  rating: z.number().min(1, 'Please select a star rating').max(5),
  title: z.string().min(3, 'Review title must be at least 3 characters').max(100),
  comment: z.string().min(10, 'Review comment must be at least 10 characters').max(1000),
  recommend: z.boolean().default(true)
})

export function validateReview(data) {
  return reviewSchema.safeParse(data)
}
