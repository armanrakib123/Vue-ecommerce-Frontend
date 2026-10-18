import { describe, it, expect } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useSettingsStore } from '../stores/settings.store.js'

describe('settings.store.js', () => {
  it('initializes default settings', () => {
    setActivePinia(createPinia())
    const store = useSettingsStore()
    expect(store.general.storeName).toBe('Nexora Global Commerce')
  })
})
