import { describe, it, expect } from 'vitest'
import { checkoutSchema } from '../schemas/checkout.schema.js'

describe('checkout-validation', () => {
  it('validates schema', () => {
    const valid = checkoutSchema.safeParse({
      fullName: 'Sarah Connor',
      email: 's@test.com',
      street: 'Market St',
      city: 'SF',
      postalCode: '94107'
    })
    expect(valid.success).toBe(true)
  })
})
