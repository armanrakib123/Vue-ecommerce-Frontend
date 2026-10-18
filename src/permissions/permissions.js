export const PERMISSIONS = {
  // Catalog
  CATALOG_READ: 'catalog:read',
  CATALOG_WRITE: 'catalog:write',
  CATALOG_DELETE: 'catalog:delete',
  
  // Orders
  ORDERS_READ_OWN: 'orders:read_own',
  ORDERS_READ_ALL: 'orders:read_all',
  ORDERS_UPDATE: 'orders:update',
  ORDERS_CANCEL: 'orders:cancel',

  // Inventory
  INVENTORY_READ: 'inventory:read',
  INVENTORY_ADJUST: 'inventory:adjust',
  INVENTORY_TRANSFER: 'inventory:transfer',

  // Seller
  SELLER_MANAGE_OWN: 'seller:manage_own',
  SELLER_PAYOUTS: 'seller:payouts',

  // Support
  SUPPORT_TICKETS_READ: 'support:tickets_read',
  SUPPORT_TICKETS_REPLY: 'support:tickets_reply',

  // Marketing
  PROMOTIONS_MANAGE: 'promotions:manage',
  COUPONS_MANAGE: 'coupons:manage',

  // Finance
  PAYMENTS_READ: 'payments:read',
  REFUNDS_PROCESS: 'refunds:process',

  // Analytics
  ANALYTICS_READ: 'analytics:read',
  ANALYTICS_EXPORT: 'analytics:export',

  // Admin & Users
  USERS_MANAGE: 'users:manage',
  ROLES_MANAGE: 'roles:manage',
  SETTINGS_MANAGE: 'settings:manage',
}
