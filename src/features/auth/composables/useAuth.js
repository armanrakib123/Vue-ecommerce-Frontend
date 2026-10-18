import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth.store.js'

export function useAuth() {
  const authStore = useAuthStore()

  return {
    user: computed(() => authStore.user),
    isAuthenticated: computed(() => authStore.isAuthenticated),
    currentRole: computed(() => authStore.currentRole),
    login: authStore.login,
    logout: authStore.logout,
    hasPermission: authStore.hasPermission,
    isRole: authStore.isRole,
    switchRolePersona: authStore.switchRolePersona,
  }
}
