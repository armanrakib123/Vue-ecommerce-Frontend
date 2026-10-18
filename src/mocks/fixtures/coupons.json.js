export const mockCoupons = [
  {
    code: 'NEXORA20',
    type: 'percentage',
    discount: 20,
    minOrderValue: 100,
    description: '20% off all orders over $100',
    validUntil: '2026-12-31',
    isActive: true,
  },
  {
    code: 'FREESHIP',
    type: 'free_shipping',
    discount: 15,
    minOrderValue: 50,
    description: 'Free Express Shipping on orders over $50',
    validUntil: '2026-11-30',
    isActive: true,
  },
  {
    code: 'WELCOME50',
    type: 'fixed',
    discount: 50,
    minOrderValue: 250,
    description: '$50 discount on premium electronics',
    validUntil: '2026-10-31',
    isActive: true,
  }
]
