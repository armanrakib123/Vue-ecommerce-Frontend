import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import { router } from '@/router/index.js'
import i18n from '@/i18n/index.js'

export function renderWithProviders(component, options = {}) {
  const pinia = createPinia()
  return mount(component, {
    ...options,
    global: {
      plugins: [pinia, router, i18n, ...(options.global?.plugins || [])],
      stubs: {
        RouterLink: true,
        'router-link': true,
        ...(options.global?.stubs || {})
      },
      ...options.global
    }
  })
}
