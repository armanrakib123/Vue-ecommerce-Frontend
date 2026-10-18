import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useAuthStore } from '@/stores/auth.store.js'
import { ROLES } from '@/permissions/roles.js'

describe('auth.store.js', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('allows switching role personas dynamically', () => {
    const authStore = useAuthStore()
    authStore.switchRolePersona(ROLES.SELLER)
    expect(authStore.currentRole).toBe(ROLES.SELLER)
    expect(authStore.isAuthenticated).toBe(true)
  })
})
