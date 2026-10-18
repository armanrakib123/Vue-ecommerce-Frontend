import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CategoryTree from '../components/CategoryTree.vue'

describe('CategoryTree.vue', () => {
  it('renders category tree', () => {
    const wrapper = mount(CategoryTree, {
      props: { categories: [{ id: '1', name: 'Audio' }] }
    })
    expect(wrapper.text()).toContain('Audio')
  })
})
