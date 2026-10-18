import { beforeAll, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'

// Global test environment polyfills & setup
beforeAll(() => {
  // Mock window.matchMedia
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }),
  })

  // Mock localStorage
  const storage = {}
  global.localStorage = {
    getItem: (key) => storage[key] || null,
    setItem: (key, val) => { storage[key] = String(val) },
    removeItem: (key) => { delete storage[key] },
    clear: () => { Object.keys(storage).forEach(k => delete storage[k]) }
  }
})

beforeEach(() => {
  setActivePinia(createPinia())
})
