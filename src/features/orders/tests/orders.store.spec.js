import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useOrdersStore } from '../stores/orders.store.js'

describe('orders.store.js', () => {
  beforeEach(() => { setActivePinia(createPinia()) })
  it('loads orders array', () => {
    const store = useOrdersStore()
    expect(store.orders.length).toBeGreaterThan(0)
  })
})
