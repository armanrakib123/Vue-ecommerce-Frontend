import { ROLES, ROLE_DEFAULT_ROUTES } from '@/permissions/roles.js'

export function resolveHomeRouteByRole(role) {
  return ROLE_DEFAULT_ROUTES[role] || '/'
}

export function isRouteAllowedForRole(routeRoles, userRole) {
  if (!routeRoles || routeRoles.length === 0) return true
  if (userRole === ROLES.ADMIN) return true
  return routeRoles.includes(userRole)
}
