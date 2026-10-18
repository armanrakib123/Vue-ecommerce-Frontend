import { useAuthStore } from '@/stores/auth.store.js'

export function guestGuard(to, from, next) {
  const authStore = useAuthStore()

  if (to.meta.guestOnly && authStore.isAuthenticated) {
    return next(authStore.getDefaultPortalRoute())
  }

  next()
}
