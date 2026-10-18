import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CouponInput from '../components/CouponInput.vue'
import { createPinia } from 'pinia'

describe('CouponInput.vue', () => {
  it('renders promo code input and button', () => {
    const wrapper = mount(CouponInput, {
      global: { plugins: [createPinia()] }
    })
    expect(wrapper.find('input').attributes('placeholder')).toBe('PROMO CODE')
  })
})
