export const ORDER_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  PROCESSING: 'processing',
  PICKED: 'picked',
  PACKED: 'packed',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
  REFUNDED: 'refunded',
}

export const PAYMENT_STATUS = {
  PENDING: 'pending',
  PAID: 'paid',
  FAILED: 'failed',
  REFUNDED: 'refunded',
}

export const TICKET_STATUS = {
  OPEN: 'open',
  IN_PROGRESS: 'in_progress',
  RESOLVED: 'resolved',
  CLOSED: 'closed',
}

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'nexora_auth_token',
  AUTH_USER: 'nexora_auth_user',
  CART: 'nexora_cart_state',
  WISHLIST: 'nexora_wishlist_state',
  THEME: 'nexora_theme_preference',
  LOCALE: 'nexora_locale_preference',
}
