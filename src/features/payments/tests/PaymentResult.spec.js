import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PaymentResult from '../components/PaymentResult.vue'

describe('PaymentResult.vue', () => {
  it('renders payment result', () => {
    const wrapper = mount(PaymentResult)
    expect(wrapper.exists()).toBe(true)
  })
})
