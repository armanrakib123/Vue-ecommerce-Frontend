import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CartPage from '../pages/CartPage.vue'
import { createPinia, setActivePinia } from 'pinia'

describe('CartPage.vue', () => {
  it('mounts cart page', () => {
    setActivePinia(createPinia())
    const wrapper = mount(CartPage, {
      global: { stubs: ['RouterLink'] }
    })
    expect(wrapper.text()).toContain('Cart Page')
  })
})
