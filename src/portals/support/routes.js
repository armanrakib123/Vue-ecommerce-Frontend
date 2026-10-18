import { ROUTE_NAMES } from '@/router/route-names.js'
import { ROLES } from '@/permissions/roles.js'

export const supportRoutes = [
  {
    path: 'dashboard',
    name: ROUTE_NAMES.SUPPORT_DASHBOARD,
    component: () => import('./pages/SupportDashboardPage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.SUPPORT_AGENT, ROLES.ADMIN], title: 'Support Desk' }
  },
  {
    path: 'tickets',
    name: ROUTE_NAMES.SUPPORT_TICKETS,
    component: () => import('./pages/TicketsPage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.SUPPORT_AGENT, ROLES.ADMIN], title: 'Ticket Queue' }
  },
  {
    path: 'tickets/:id',
    name: ROUTE_NAMES.SUPPORT_TICKET_DETAIL,
    component: () => import('./pages/TicketDetailsPage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.SUPPORT_AGENT, ROLES.ADMIN], title: 'Ticket Details' }
  },
  {
    path: 'lookup',
    name: ROUTE_NAMES.SUPPORT_LOOKUP,
    component: () => import('./pages/CustomerOrderLookupPage.vue'),
    meta: { requiresAuth: true, roles: [ROLES.SUPPORT_AGENT, ROLES.ADMIN], title: 'Order Lookup' }
  },
  {
    path: 'help',
    name: ROUTE_NAMES.SUPPORT_HELP,
    component: () => import('@/features/support/pages/HelpCenterPage.vue'),
    meta: { title: 'Help Center' }
  }
]
