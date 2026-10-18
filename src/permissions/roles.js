export const ROLES = {
  GUEST: 'guest',
  CUSTOMER: 'customer',
  SELLER: 'seller',
  CATALOG_MANAGER: 'catalog_manager',
  ORDER_MANAGER: 'order_manager',
  INVENTORY_MANAGER: 'inventory_manager',
  SUPPORT_AGENT: 'support_agent',
  MARKETING_MANAGER: 'marketing_manager',
  FINANCE_OPERATOR: 'finance_operator',
  ANALYST: 'analyst',
  ADMIN: 'admin',
}

export const ROLE_LABELS = {
  [ROLES.GUEST]: 'Guest / Visitor',
  [ROLES.CUSTOMER]: 'Customer',
  [ROLES.SELLER]: 'Seller / Merchant',
  [ROLES.CATALOG_MANAGER]: 'Catalog Manager',
  [ROLES.ORDER_MANAGER]: 'Order Manager',
  [ROLES.INVENTORY_MANAGER]: 'Inventory Manager',
  [ROLES.SUPPORT_AGENT]: 'Support Agent',
  [ROLES.MARKETING_MANAGER]: 'Marketing Manager',
  [ROLES.FINANCE_OPERATOR]: 'Finance / Refund Operator',
  [ROLES.ANALYST]: 'Business Analyst',
  [ROLES.ADMIN]: 'System Administrator',
}

export const ROLE_DEFAULT_ROUTES = {
  [ROLES.GUEST]: '/',
  [ROLES.CUSTOMER]: '/account/profile',
  [ROLES.SELLER]: '/seller/dashboard',
  [ROLES.CATALOG_MANAGER]: '/admin/products',
  [ROLES.ORDER_MANAGER]: '/admin/orders',
  [ROLES.INVENTORY_MANAGER]: '/warehouse/dashboard',
  [ROLES.SUPPORT_AGENT]: '/support/dashboard',
  [ROLES.MARKETING_MANAGER]: '/marketing/campaigns',
  [ROLES.FINANCE_OPERATOR]: '/admin/payments',
  [ROLES.ANALYST]: '/admin/analytics',
  [ROLES.ADMIN]: '/admin/dashboard',
}
