import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SearchInput from '../components/SearchInput.vue'

describe('SearchInput.vue', () => {
  it('renders input box', () => {
    const wrapper = mount(SearchInput)
    expect(wrapper.find('input').exists()).toBe(true)
  })
})
