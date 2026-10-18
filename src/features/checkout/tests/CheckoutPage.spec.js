import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CheckoutPage from '../pages/CheckoutPage.vue'

describe('CheckoutPage.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(CheckoutPage)
    expect(wrapper.text()).toContain('Checkout')
  })
})
