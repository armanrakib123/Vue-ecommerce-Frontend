import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ShipmentTracking from '../components/ShipmentTracking.vue'

describe('ShipmentTracking.vue', () => {
  it('renders tracking number and carrier', () => {
    const wrapper = mount(ShipmentTracking, {
      props: { trackingNumber: 'TEST-123', carrier: 'DHL' }
    })
    expect(wrapper.text()).toContain('TEST-123')
    expect(wrapper.text()).toContain('DHL')
  })
})
