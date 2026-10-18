import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCartStore } from '@/stores/cart.store.js'

describe('cart.store.js', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('calculates totals correctly when adding items', () => {
    const cart = useCartStore()
    cart.clearCart()
    cart.addItem({ id: 'p1', name: 'Item 1', price: 100 })
    expect(cart.totalItemsCount).toBe(1)
    expect(cart.subtotal).toBe(100)
  })
})
