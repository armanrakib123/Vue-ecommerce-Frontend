import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { STORAGE_KEYS } from '@/utils/constants.js'
import { storage } from '@/services/storage/local-storage.js'
import { ROLES, ROLE_DEFAULT_ROUTES } from '@/permissions/roles.js'
import { can, hasRole } from '@/permissions/access-policy.js'
import { mockUsers } from '@/mocks/fixtures/users.json.js'
import apiClient from '@/services/http/client.js'

export const useAuthStore = defineStore('auth', () => {
  // Default to Customer persona so the site is instantly rich & authenticated, but easy to switch
  const user = ref(storage.get(STORAGE_KEYS.AUTH_USER, mockUsers[0]))
  const token = ref(storage.get(STORAGE_KEYS.AUTH_TOKEN, 'jwt_mock_token_sarah_01'))
  const isLoading = ref(false)

  const isAuthenticated = computed(() => !!token.value && !!user.value)
  const currentRole = computed(() => user.value?.role || ROLES.GUEST)
  const userDisplayName = computed(() => user.value?.name || 'Guest User')

  async function login(email, password) {
    isLoading.value = true
    try {
      const response = await apiClient.post('/auth/login', { email, password })
      user.value = response.data.user
      token.value = response.data.token
      storage.set(STORAGE_KEYS.AUTH_USER, user.value)
      storage.set(STORAGE_KEYS.AUTH_TOKEN, token.value)
      return response.data.user
    } finally {
      isLoading.value = false
    }
  }

  function switchRolePersona(role) {
    if (role === ROLES.GUEST) {
      user.value = null
      token.value = null
      storage.remove(STORAGE_KEYS.AUTH_USER)
      storage.remove(STORAGE_KEYS.AUTH_TOKEN)
      return null
    }

    const persona = mockUsers.find(u => u.role === role) || {
      id: `usr_${role}_01`,
      name: `${role.toUpperCase()} User`,
      email: `${role}@nexora.io`,
      role,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    }
    user.value = persona
    token.value = `jwt_mock_${role}_token`
    storage.set(STORAGE_KEYS.AUTH_USER, user.value)
    storage.set(STORAGE_KEYS.AUTH_TOKEN, token.value)
    return persona
  }

  function logout() {
    user.value = null
    token.value = null
    storage.remove(STORAGE_KEYS.AUTH_USER)
    storage.remove(STORAGE_KEYS.AUTH_TOKEN)
  }

  function hasPermission(permission) {
    return can(user.value, permission)
  }

  function isRole(allowedRoles) {
    return hasRole(user.value, allowedRoles)
  }

  function getDefaultPortalRoute() {
    return ROLE_DEFAULT_ROUTES[currentRole.value] || '/'
  }

  return {
    user,
    token,
    isLoading,
    isAuthenticated,
    currentRole,
    userDisplayName,
    login,
    switchRolePersona,
    logout,
    hasPermission,
    isRole,
    getDefaultPortalRoute,
  }
})
