import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import LoginForm from '../components/LoginForm.vue'
import { createPinia, setActivePinia } from 'pinia'

describe('LoginForm.vue', () => {
  it('renders login form properly', () => {
    setActivePinia(createPinia())
    const wrapper = mount(LoginForm, {
      global: {
        stubs: ['RouterLink']
      }
    })
    expect(wrapper.find('input[type="email"]').exists()).toBe(true)
    expect(wrapper.find('input[type="password"]').exists()).toBe(true)
  })
})
