import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import RewardsCatalog from '../components/RewardsCatalog.vue'

describe('RewardsCatalog.vue', () => {
  it('renders rewards catalog', () => {
    const wrapper = mount(RewardsCatalog, {
      props: {
        rewards: [{ id: '1', title: 'Gift Card', cost: 100, description: 'Test reward' }],
        userPoints: 500
      }
    })
    expect(wrapper.text()).toContain('Exclusive Perks & Vouchers')
    expect(wrapper.text()).toContain('Gift Card')
  })
})
