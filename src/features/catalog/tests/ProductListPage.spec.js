import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProductListPage from '../pages/ProductListPage.vue'

describe('ProductListPage.vue', () => {
  it('mounts without crash', () => {
    const wrapper = mount(ProductListPage, {
      global: { stubs: ['RouterLink', 'ProductGrid'] }
    })
    expect(wrapper.find('h1').text()).toBe('Catalog')
  })
})
