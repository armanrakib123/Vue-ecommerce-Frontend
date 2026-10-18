import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ReviewForm from '../components/ReviewForm.vue'

describe('ReviewForm.vue', () => {
  it('renders review form elements', () => {
    const wrapper = mount(ReviewForm)
    expect(wrapper.text()).toContain('Write a Verified Review')
  })
})
