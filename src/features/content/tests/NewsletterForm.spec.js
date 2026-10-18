import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NewsletterForm from '../components/NewsletterForm.vue'
import { createPinia } from 'pinia'

describe('NewsletterForm.vue', () => {
  it('renders newsletter input', () => {
    const wrapper = mount(NewsletterForm, {
      global: { plugins: [createPinia()] }
    })
    expect(wrapper.find('input[type="email"]').exists()).toBe(true)
  })
})
