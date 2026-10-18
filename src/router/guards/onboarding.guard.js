import { useAuthStore } from '@/stores/auth.store.js'
import { ROLES } from '@/permissions/roles.js'

export function onboardingGuard(to, from, next) {
  const authStore = useAuthStore()

  // For sellers who haven't completed onboarding, route them to onboarding if needed
  if (
    authStore.isAuthenticated &&
    authStore.currentRole === ROLES.SELLER &&
    authStore.user?.needsOnboarding &&
    to.name !== 'seller.onboarding'
  ) {
    return next('/seller/onboarding')
  }

  next()
}
