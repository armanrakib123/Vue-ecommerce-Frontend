import { ROUTE_NAMES } from '@/router/route-names.js'

export const customerRoutes = [
  {
    path: '',
    name: ROUTE_NAMES.HOME,
    component: () => import('./pages/HomePage.vue'),
    meta: { title: 'Home' }
  },
  {
    path: 'products',
    name: ROUTE_NAMES.PRODUCTS,
    component: () => import('./pages/ProductListingPage.vue'),
    meta: { title: 'All Products' }
  },
  {
    path: 'products/:slug',
    name: ROUTE_NAMES.PRODUCT_DETAIL,
    component: () => import('./pages/ProductDetailsPage.vue'),
    meta: { title: 'Product Details' }
  },
  {
    path: 'categories/:slug',
    name: ROUTE_NAMES.CATEGORY_DETAIL,
    component: () => import('./pages/ProductListingPage.vue'),
    meta: { title: 'Category Products' }
  },
  {
    path: 'search',
    name: ROUTE_NAMES.SEARCH,
    component: () => import('./pages/SearchResultsPage.vue'),
    meta: { title: 'Search Results' }
  },
  {
    path: 'cart',
    name: ROUTE_NAMES.CART,
    component: () => import('./pages/CartPage.vue'),
    meta: { title: 'Shopping Cart' }
  },
  {
    path: 'checkout',
    name: ROUTE_NAMES.CHECKOUT,
    component: () => import('./pages/CheckoutPage.vue'),
    meta: { title: 'Checkout' }
  },
  {
    path: 'order-confirmation',
    name: ROUTE_NAMES.ORDER_CONFIRMATION,
    component: () => import('./pages/OrderConfirmationPage.vue'),
    meta: { title: 'Order Confirmed' }
  },
  {
    path: 'about',
    name: ROUTE_NAMES.ABOUT,
    component: () => import('@/features/content/pages/AboutPage.vue'),
    meta: { title: 'About Us' }
  },
  {
    path: 'contact',
    name: ROUTE_NAMES.CONTACT,
    component: () => import('@/features/content/pages/ContactPage.vue'),
    meta: { title: 'Contact Support' }
  },
  {
    path: 'faq',
    name: ROUTE_NAMES.FAQ,
    component: () => import('@/features/content/pages/FAQPage.vue'),
    meta: { title: 'Frequently Asked Questions' }
  },
  {
    path: 'promotions',
    name: ROUTE_NAMES.PROMOTIONS,
    component: () => import('@/features/promotions/pages/PromotionsPage.vue'),
    meta: { title: 'Promotions & Deals' }
  }
]

export const accountRoutes = [
  {
    path: 'profile',
    name: ROUTE_NAMES.ACCOUNT_PROFILE,
    component: () => import('./pages/MyAccountPage.vue'),
    meta: { requiresAuth: true, title: 'My Profile' }
  },
  {
    path: 'orders',
    name: ROUTE_NAMES.ACCOUNT_ORDERS,
    component: () => import('./pages/MyOrdersPage.vue'),
    meta: { requiresAuth: true, title: 'My Orders' }
  },
  {
    path: 'orders/:id',
    name: ROUTE_NAMES.ACCOUNT_ORDER_DETAIL,
    component: () => import('./pages/OrderDetailsPage.vue'),
    meta: { requiresAuth: true, title: 'Order Details' }
  },
  {
    path: 'addresses',
    name: ROUTE_NAMES.ACCOUNT_ADDRESSES,
    component: () => import('./pages/MyAddressesPage.vue'),
    meta: { requiresAuth: true, title: 'Saved Addresses' }
  },
  {
    path: 'wishlist',
    name: ROUTE_NAMES.ACCOUNT_WISHLIST,
    component: () => import('./pages/WishlistPage.vue'),
    meta: { title: 'My Wishlist' }
  },
  {
    path: 'returns',
    name: ROUTE_NAMES.ACCOUNT_RETURNS,
    component: () => import('./pages/MyReturnsPage.vue'),
    meta: { requiresAuth: true, title: 'Returns & Refunds' }
  },
  {
    path: 'loyalty',
    name: ROUTE_NAMES.ACCOUNT_LOYALTY,
    component: () => import('@/features/loyalty/pages/LoyaltyPage.vue'),
    meta: { requiresAuth: true, title: 'Loyalty Rewards' }
  },
  {
    path: 'security',
    name: ROUTE_NAMES.ACCOUNT_SECURITY,
    component: () => import('@/features/users/pages/AccountSecurityPage.vue'),
    meta: { requiresAuth: true, title: 'Account Security' }
  }
]
