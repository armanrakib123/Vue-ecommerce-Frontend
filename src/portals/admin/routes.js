import { ROUTE_NAMES } from '@/router/route-names.js'
import { ROLES } from '@/permissions/roles.js'

export const adminRoutes = [
  {
    path: 'dashboard',
    name: ROUTE_NAMES.ADMIN_DASHBOARD,
    component: () => import('./pages/DashboardPage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.ADMIN, ROLES.ORDER_MANAGER, ROLES.CATALOG_MANAGER, ROLES.ANALYST], title: 'Admin Dashboard' }
  },
  {
    path: 'users',
    name: ROUTE_NAMES.ADMIN_USERS,
    component: () => import('./pages/UsersPage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.ADMIN], title: 'Staff & Users' }
  },
  {
    path: 'roles-permissions',
    name: ROUTE_NAMES.ADMIN_ROLES_PERMISSIONS,
    component: () => import('./pages/RolesPermissionsPage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.ADMIN], title: 'RBAC Policy Matrix' }
  },
  {
    path: 'products',
    name: ROUTE_NAMES.ADMIN_PRODUCTS,
    component: () => import('./pages/ProductsPage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.ADMIN, ROLES.CATALOG_MANAGER], title: 'Catalog Management' }
  },
  {
    path: 'categories',
    name: ROUTE_NAMES.ADMIN_CATEGORIES,
    component: () => import('./pages/CategoriesPage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.ADMIN, ROLES.CATALOG_MANAGER], title: 'Categories' }
  },
  {
    path: 'orders',
    name: ROUTE_NAMES.ADMIN_ORDERS,
    component: () => import('./pages/OrdersPage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.ADMIN, ROLES.ORDER_MANAGER, ROLES.SUPPORT_AGENT], title: 'Orders Pipeline' }
  },
  {
    path: 'payments',
    name: ROUTE_NAMES.ADMIN_PAYMENTS,
    component: () => import('./pages/PaymentsPage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.ADMIN, ROLES.FINANCE_OPERATOR], title: 'Payments & Gateway' }
  },
  {
    path: 'refunds',
    name: ROUTE_NAMES.ADMIN_REFUNDS,
    component: () => import('./pages/RefundsPage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.ADMIN, ROLES.FINANCE_OPERATOR], title: 'Refund Authorizations' }
  },
  {
    path: 'sellers',
    name: ROUTE_NAMES.ADMIN_SELLERS,
    component: () => import('./pages/SellersPage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.ADMIN], title: 'Merchants & Sellers' }
  },
  {
    path: 'inventory',
    name: ROUTE_NAMES.ADMIN_INVENTORY,
    component: () => import('./pages/InventoryPage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.ADMIN, ROLES.INVENTORY_MANAGER], title: 'Inventory Control' }
  },
  {
    path: 'coupons',
    name: ROUTE_NAMES.ADMIN_COUPONS,
    component: () => import('./pages/CouponsPage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.ADMIN, ROLES.MARKETING_MANAGER], title: 'Coupons' }
  },
  {
    path: 'campaigns',
    name: ROUTE_NAMES.ADMIN_CAMPAIGNS,
    component: () => import('./pages/CampaignsPage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.ADMIN, ROLES.MARKETING_MANAGER], title: 'Marketing Campaigns' }
  },
  {
    path: 'reviews',
    name: ROUTE_NAMES.ADMIN_REVIEWS,
    component: () => import('./pages/ReviewsModerationPage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.ADMIN, ROLES.SUPPORT_AGENT], title: 'Reviews Moderation' }
  },
  {
    path: 'tickets',
    name: ROUTE_NAMES.ADMIN_TICKETS,
    component: () => import('./pages/SupportTicketsPage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.ADMIN, ROLES.SUPPORT_AGENT], title: 'Support Escalations' }
  },
  {
    path: 'analytics',
    name: ROUTE_NAMES.ADMIN_ANALYTICS,
    component: () => import('./pages/AnalyticsPage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.ADMIN, ROLES.ANALYST], title: 'Analytics' }
  },
  {
    path: 'audit-logs',
    name: ROUTE_NAMES.ADMIN_AUDIT_LOGS,
    component: () => import('./pages/AuditLogsPage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.ADMIN], title: 'Audit Trail' }
  },
  {
    path: 'settings',
    name: ROUTE_NAMES.ADMIN_SETTINGS,
    component: () => import('./pages/SettingsPage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.ADMIN], title: 'System Settings' }
  }
]
