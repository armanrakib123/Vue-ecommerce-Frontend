import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes.js'
import { authGuard } from './guards/auth.guard.js'
import { guestGuard } from './guards/guest.guard.js'
import { permissionGuard } from './guards/permission.guard.js'
import { onboardingGuard } from './guards/onboarding.guard.js'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  },
})

// Navigation Guard Pipeline
router.beforeEach(authGuard)
router.beforeEach(guestGuard)
router.beforeEach(permissionGuard)
router.beforeEach(onboardingGuard)

// Post navigation title and metadata handling
router.afterEach((to) => {
  const baseTitle = 'Nexora Commerce'
  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} | ${baseTitle}`
  } else {
    document.title = baseTitle
  }
})

export default router
