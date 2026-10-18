import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AddressForm from '../components/AddressForm.vue'

describe('AddressForm.vue', () => {
  it('renders address inputs', () => {
    const wrapper = mount(AddressForm)
    expect(wrapper.text()).toContain('Street')
  })
})
