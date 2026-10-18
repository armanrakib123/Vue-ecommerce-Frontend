import { ROUTE_NAMES } from '@/router/route-names.js'
import { ROLES } from '@/permissions/roles.js'

export const marketingRoutes = [
  {
    path: 'campaigns',
    name: ROUTE_NAMES.MARKETING_CAMPAIGNS,
    component: () => import('./pages/CampaignsPage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.MARKETING_MANAGER, ROLES.ADMIN], title: 'Campaigns' }
  },
  {
    path: 'coupons',
    name: ROUTE_NAMES.MARKETING_COUPONS,
    component: () => import('./pages/CouponsPage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.MARKETING_MANAGER, ROLES.ADMIN], title: 'Coupons' }
  },
  {
    path: 'banners',
    name: ROUTE_NAMES.MARKETING_BANNERS,
    component: () => import('./pages/BannersPage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.MARKETING_MANAGER, ROLES.ADMIN], title: 'Banners' }
  },
  {
    path: 'performance',
    name: ROUTE_NAMES.MARKETING_PERFORMANCE,
    component: () => import('./pages/PerformancePage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.MARKETING_MANAGER, ROLES.ADMIN], title: 'Performance' }
  }
]
