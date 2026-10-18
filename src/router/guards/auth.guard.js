import { useAuthStore } from '@/stores/auth.store.js'

export function authGuard(to, from, next) {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  }

  next()
}
