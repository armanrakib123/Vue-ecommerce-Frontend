import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ReturnRequestForm from '../components/ReturnRequestForm.vue'

describe('ReturnRequestForm.vue', () => {
  it('renders return request form', () => {
    const wrapper = mount(ReturnRequestForm)
    expect(wrapper.text()).toContain('Start a No-Hassle Return')
  })
})
