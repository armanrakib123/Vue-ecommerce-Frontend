import { useAuthStore } from '@/stores/auth.store.js'
import { isRouteAllowedForRole } from '../utils/route-resolver.js'
import { ROLES } from '@/permissions/roles.js'

export function permissionGuard(to, from, next) {
  const authStore = useAuthStore()

  // Role check
  if (to.meta.roles && to.meta.roles.length > 0) {
    if (!authStore.isAuthenticated) {
      return next({ path: '/login', query: { redirect: to.fullPath } })
    }

    if (!isRouteAllowedForRole(to.meta.roles, authStore.currentRole)) {
      return next({
        path: '/unauthorized',
        query: { requiredRole: to.meta.roles.join(','), currentRole: authStore.currentRole }
      })
    }
  }

  // Permission check
  if (to.meta.permission) {
    if (!authStore.isAuthenticated) {
      return next({ path: '/login', query: { redirect: to.fullPath } })
    }
    if (!authStore.hasPermission(to.meta.permission)) {
      return next({
        path: '/unauthorized',
        query: { requiredPermission: to.meta.permission }
      })
    }
  }

  next()
}
