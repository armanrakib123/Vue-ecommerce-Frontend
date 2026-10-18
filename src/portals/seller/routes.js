import { ROUTE_NAMES } from '@/router/route-names.js'
import { ROLES } from '@/permissions/roles.js'

export const sellerRoutes = [
  {
    path: 'dashboard',
    name: ROUTE_NAMES.SELLER_DASHBOARD,
    component: () => import('./pages/DashboardPage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.SELLER, ROLES.ADMIN], title: 'Seller Dashboard' }
  },
  {
    path: 'products',
    name: ROUTE_NAMES.SELLER_PRODUCTS,
    component: () => import('./pages/ProductsPage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.SELLER, ROLES.ADMIN], title: 'Seller Products' }
  },
  {
    path: 'products/new',
    name: ROUTE_NAMES.SELLER_PRODUCT_EDITOR,
    component: () => import('./pages/ProductEditorPage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.SELLER, ROLES.ADMIN], title: 'New Product' }
  },
  {
    path: 'products/:id/edit',
    name: 'seller.product.edit',
    component: () => import('./pages/ProductEditorPage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.SELLER, ROLES.ADMIN], title: 'Edit Product' }
  },
  {
    path: 'inventory',
    name: ROUTE_NAMES.SELLER_INVENTORY,
    component: () => import('./pages/InventoryPage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.SELLER, ROLES.ADMIN], title: 'Seller Inventory' }
  },
  {
    path: 'orders',
    name: ROUTE_NAMES.SELLER_ORDERS,
    component: () => import('./pages/OrdersPage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.SELLER, ROLES.ADMIN], title: 'Seller Orders' }
  },
  {
    path: 'orders/:id',
    name: ROUTE_NAMES.SELLER_ORDER_DETAIL,
    component: () => import('./pages/OrderDetailsPage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.SELLER, ROLES.ADMIN], title: 'Seller Order Details' }
  },
  {
    path: 'payouts',
    name: ROUTE_NAMES.SELLER_PAYOUTS,
    component: () => import('./pages/PayoutsPage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.SELLER, ROLES.ADMIN], title: 'Seller Payouts' }
  },
  {
    path: 'reports',
    name: ROUTE_NAMES.SELLER_REPORTS,
    component: () => import('./pages/SalesReportsPage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.SELLER, ROLES.ADMIN], title: 'Sales Reports' }
  },
  {
    path: 'profile',
    name: ROUTE_NAMES.SELLER_PROFILE,
    component: () => import('./pages/StoreProfilePage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.SELLER, ROLES.ADMIN], title: 'Store Profile' }
  },
  {
    path: 'settings',
    name: ROUTE_NAMES.SELLER_SETTINGS,
    component: () => import('./pages/SellerSettingsPage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.SELLER, ROLES.ADMIN], title: 'Seller Settings' }
  },
  {
    path: 'onboarding',
    name: 'seller.onboarding',
    component: () => import('./pages/SellerOnboardingPage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.SELLER, ROLES.ADMIN], title: 'Merchant Onboarding' }
  }
]
