import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCheckoutStore } from '../stores/checkout.store.js'

describe('checkout.store.js', () => {
  beforeEach(() => { setActivePinia(createPinia()) })
  it('updates current step', () => {
    const store = useCheckoutStore()
    store.setStep(2)
    expect(store.currentStep).toBe(2)
  })
})
