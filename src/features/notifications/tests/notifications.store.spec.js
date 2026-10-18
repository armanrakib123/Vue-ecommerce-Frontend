import { describe, it, expect } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useNotificationStore } from '@/stores/notification.store.js'

describe('notification store', () => {
  it('adds and dismisses toasts', () => {
    setActivePinia(createPinia())
    const store = useNotificationStore()
    const id = store.success('Test message')
    expect(store.toasts.length).toBe(1)
    store.dismissToast(id)
    expect(store.toasts.length).toBe(0)
  })
})
