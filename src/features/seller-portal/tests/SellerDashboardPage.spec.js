import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SellerDashboardPage from '../pages/SellerDashboardPage.vue'
import { createPinia } from 'pinia'

describe('SellerDashboardPage.vue', () => {
  it('renders seller dashboard metrics', () => {
    const wrapper = mount(SellerDashboardPage, {
      global: {
        plugins: [createPinia()],
        stubs: ['RouterLink', 'router-link']
      }
    })
    expect(wrapper.text()).toContain('Merchant Overview')
  })
})
