import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProfileForm from '../components/ProfileForm.vue'

describe('ProfileForm.vue', () => {
  it('renders form inputs', () => {
    const wrapper = mount(ProfileForm, {
      props: { initial: { name: 'Sarah', email: 's@test.com' } }
    })
    expect(wrapper.find('input[type="email"]').exists()).toBe(true)
  })
})
