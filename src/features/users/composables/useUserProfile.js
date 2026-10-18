import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth.store.js'

export function useUserProfile() {
  const authStore = useAuthStore()
  const profile = ref(authStore.user)
  return { profile }
}
