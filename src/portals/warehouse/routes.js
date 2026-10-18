import { ROUTE_NAMES } from '@/router/route-names.js'
import { ROLES } from '@/permissions/roles.js'

export const warehouseRoutes = [
  {
    path: 'dashboard',
    name: ROUTE_NAMES.WAREHOUSE_DASHBOARD,
    component: () => import('./pages/WarehouseDashboardPage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.INVENTORY_MANAGER, ROLES.ADMIN], title: 'Warehouse Hub' }
  },
  {
    path: 'stock',
    name: ROUTE_NAMES.WAREHOUSE_STOCK,
    component: () => import('./pages/StockLevelsPage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.INVENTORY_MANAGER, ROLES.ADMIN], title: 'Stock Levels' }
  },
  {
    path: 'movements',
    name: ROUTE_NAMES.WAREHOUSE_MOVEMENTS,
    component: () => import('./pages/StockMovementsPage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.INVENTORY_MANAGER, ROLES.ADMIN], title: 'Stock Movements' }
  },
  {
    path: 'picking',
    name: ROUTE_NAMES.WAREHOUSE_PICKING,
    component: () => import('./pages/PickingQueuePage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.INVENTORY_MANAGER, ROLES.ADMIN], title: 'Picking Station' }
  },
  {
    path: 'packing',
    name: ROUTE_NAMES.WAREHOUSE_PACKING,
    component: () => import('./pages/PackingPage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.INVENTORY_MANAGER, ROLES.ADMIN], title: 'Packing Station' }
  },
  {
    path: 'handover',
    name: ROUTE_NAMES.WAREHOUSE_HANDOVER,
    component: () => import('./pages/ShipmentHandoverPage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.INVENTORY_MANAGER, ROLES.ADMIN], title: 'Carrier Handover' }
  }
]
