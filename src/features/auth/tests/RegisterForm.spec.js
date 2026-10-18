import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import RegisterForm from '../components/RegisterForm.vue'
import { createPinia, setActivePinia } from 'pinia'

describe('RegisterForm.vue', () => {
  it('renders registration fields', () => {
    setActivePinia(createPinia())
    const wrapper = mount(RegisterForm, {
      global: { stubs: ['RouterLink', 'SocialLoginButtons'] }
    })
    expect(wrapper.text()).toContain('Create Account')
  })
})
