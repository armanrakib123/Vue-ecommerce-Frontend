import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import OrderCard from '../components/OrderCard.vue'

describe('OrderCard.vue', () => {
  it('renders order number', () => {
    const wrapper = mount(OrderCard, {
      props: { order: { orderNumber: 'NX-100', total: 200 } }
    })
    expect(wrapper.text()).toContain('NX-100')
  })
})
