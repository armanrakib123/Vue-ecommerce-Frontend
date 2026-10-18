import { ROUTE_NAMES } from './route-names.js'
import { customerRoutes, accountRoutes } from '@/portals/customer/routes.js'
import { adminRoutes } from '@/portals/admin/routes.js'
import { sellerRoutes } from '@/portals/seller/routes.js'
import { supportRoutes } from '@/portals/support/routes.js'
import { warehouseRoutes } from '@/portals/warehouse/routes.js'
import { marketingRoutes } from '@/portals/marketing/routes.js'

export const routes = [
  // Storefront Layout Wrapper
  {
    path: '/',
    component: () => import('@/layouts/storefront/StorefrontLayout.vue'),
    children: customerRoutes,
  },

  // Customer Account Portal
  {
    path: '/account',
    component: () => import('@/layouts/account/AccountLayout.vue'),
    children: accountRoutes,
  },

  // Auth Portal
  {
    path: '/auth',
    component: () => import('@/layouts/auth/AuthLayout.vue'),
    children: [
      {
        path: 'login',
        name: ROUTE_NAMES.LOGIN,
        component: () => import('@/features/auth/pages/LoginPage.vue'),
        meta: { guestOnly: true, title: 'Sign In' },
      },
      {
        path: 'register',
        name: ROUTE_NAMES.REGISTER,
        component: () => import('@/features/auth/pages/RegisterPage.vue'),
        meta: { guestOnly: true, title: 'Create Account' },
      },
      {
        path: 'forgot-password',
        name: ROUTE_NAMES.FORGOT_PASSWORD,
        component: () => import('@/features/auth/pages/ForgotPasswordPage.vue'),
        meta: { guestOnly: true, title: 'Forgot Password' },
      },
      {
        path: 'reset-password',
        name: ROUTE_NAMES.RESET_PASSWORD,
        component: () => import('@/features/auth/pages/ResetPasswordPage.vue'),
        meta: { title: 'Reset Password' },
      },
      {
        path: 'verify-email',
        name: 'auth.verify-email',
        component: () => import('@/features/auth/pages/VerifyEmailPage.vue'),
        meta: { title: 'Verify Email' },
      },
      {
        path: 'verify-otp',
        name: 'auth.verify-otp',
        component: () => import('@/features/auth/pages/VerifyOtpPage.vue'),
        meta: { title: 'Verify OTP' },
      },
    ],
  },
  // Auth Top-Level Aliases
  {
    path: '/login',
    redirect: '/auth/login',
  },
  {
    path: '/register',
    redirect: '/auth/register',
  },
  {
    path: '/forgot-password',
    redirect: '/auth/forgot-password',
  },

  // Admin Portal
  {
    path: '/admin',
    component: () => import('@/layouts/admin/AdminLayout.vue'),
    children: [
      {
        path: '',
        redirect: '/admin/dashboard',
      },
      ...adminRoutes,
    ],
  },

  // Seller Portal
  {
    path: '/seller',
    component: () => import('@/layouts/seller/SellerLayout.vue'),
    children: [
      {
        path: '',
        redirect: '/seller/dashboard',
      },
      ...sellerRoutes,
    ],
  },

  // Support Portal
  {
    path: '/support',
    component: () => import('@/layouts/support/SupportLayout.vue'),
    children: [
      {
        path: '',
        redirect: '/support/dashboard',
      },
      ...supportRoutes,
    ],
  },

  // Warehouse Portal
  {
    path: '/warehouse',
    component: () => import('@/layouts/admin/AdminLayout.vue'),
    children: [
      {
        path: '',
        redirect: '/warehouse/dashboard',
      },
      ...warehouseRoutes,
    ],
  },

  // Marketing Portal
  {
    path: '/marketing',
    component: () => import('@/layouts/admin/AdminLayout.vue'),
    children: [
      {
        path: '',
        redirect: '/marketing/campaigns',
      },
      ...marketingRoutes,
    ],
  },

  // Error Layout
  {
    path: '/error',
    component: () => import('@/layouts/error/ErrorLayout.vue'),
    children: [
      {
        path: 'unauthorized',
        name: ROUTE_NAMES.UNAUTHORIZED,
        component: {
          template: `
            <div class="text-center max-w-md mx-auto p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
              <div class="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-500 mx-auto flex items-center justify-center mb-4 text-2xl font-black">!</div>
              <h2 class="text-2xl font-black text-slate-900 dark:text-white mb-2 font-display">Access Restricted</h2>
              <p class="text-xs text-slate-500 mb-6">Your current role does not have permission to view this enterprise portal section. Use the top persona switcher to change your role.</p>
              <RouterLink to="/" class="px-5 py-2.5 rounded-xl bg-brand-600 text-white font-bold text-xs inline-block shadow-md">Return to Storefront</RouterLink>
            </div>
          `,
        },
        meta: { title: 'Access Restricted' },
      },
    ],
  },
  {
    path: '/unauthorized',
    redirect: '/error/unauthorized',
  },

  // Wildcard 404
  {
    path: '/:pathMatch(.*)*',
    name: ROUTE_NAMES.NOT_FOUND,
    component: () => import('@/layouts/error/ErrorLayout.vue'),
    children: [
      {
        path: '',
        component: {
          template: `
            <div class="text-center max-w-md mx-auto p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
              <div class="text-6xl font-black text-brand-600 mb-2 font-display">404</div>
              <h2 class="text-xl font-black text-slate-900 dark:text-white mb-2">Page Not Found</h2>
              <p class="text-xs text-slate-500 mb-6">The page or portal route you requested could not be located in Nexora Commerce.</p>
              <RouterLink to="/" class="px-5 py-2.5 rounded-xl bg-brand-600 text-white font-bold text-xs inline-block shadow-md">Back to Safety</RouterLink>
            </div>
          `,
        },
      },
    ],
    meta: { title: '404 - Not Found' },
  },
]

export default routes
