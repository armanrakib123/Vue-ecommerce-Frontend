import { z } from 'zod'

export const stockAdjustmentSchema = z.object({
  sku: z.string().min(1, 'SKU is required'),
  delta: z.number().int().refine(val => val !== 0, 'Adjustment must be non-zero'),
  reason: z.string().min(3, 'Reason required for audit trail'),
  warehouse: z.string().min(1, 'Warehouse designation required')
})

export function validateStockAdjustment(data) {
  return stockAdjustmentSchema.safeParse(data)
}
