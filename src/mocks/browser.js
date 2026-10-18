import { mockProducts } from './fixtures/products.json.js'
import { mockCategories } from './fixtures/categories.json.js'
import { mockUsers } from './fixtures/users.json.js'
import { mockOrders } from './fixtures/orders.json.js'
import { mockInventory } from './fixtures/inventory.json.js'
import { mockTickets } from './fixtures/tickets.json.js'
import { mockCoupons } from './fixtures/coupons.json.js'
import { paginate } from '@/utils/pagination.js'

// In-memory writable state for mock operations
let products = [...mockProducts]
let orders = [...mockOrders]
let inventory = [...mockInventory]
let tickets = [...mockTickets]
let coupons = [...mockCoupons]

export const mockApi = {
  // Products
  async getProducts({ page = 1, limit = 12, category, search, sort } = {}) {
    let result = [...products]
    if (category) {
      result = result.filter(p => p.category === category)
    }
    if (search) {
      const q = search.toLowerCase()
      result = result.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q))
    }
    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') result.sort((a, b) => b.price - a.price)
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating)
    if (sort === 'newest') result.reverse()

    return paginate(result, Number(page), Number(limit))
  },

  async getProductBySlug(slug) {
    const product = products.find(p => p.slug === slug || p.id === slug)
    if (!product) throw new Error('Product not found')
    return product
  },

  async addProduct(productData) {
    const newProduct = {
      id: `prod_${Date.now()}`,
      slug: productData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      ...productData,
      rating: 5.0,
      reviewsCount: 0,
      inStock: true
    }
    products.unshift(newProduct)
    return newProduct
  },

  // Categories
  async getCategories() {
    return [...mockCategories]
  },

  // Orders
  async getOrders(customerId) {
    if (customerId) {
      return orders.filter(o => o.customer.id === customerId)
    }
    return [...orders]
  },

  async getOrderById(id) {
    const order = orders.find(o => o.id === id || o.orderNumber === id)
    if (!order) throw new Error('Order not found')
    return order
  },

  async createOrder(orderPayload) {
    const newOrder = {
      id: `ord_${Date.now().toString().slice(-6)}`,
      orderNumber: `NX-2026-${Math.floor(100000 + Math.random() * 900000)}`,
      createdAt: new Date().toISOString(),
      status: 'confirmed',
      paymentStatus: 'paid',
      tracking: {
        carrier: 'FedEx Express',
        trackingNumber: `FX-${Math.floor(1000 + Math.random() * 9000)}-${Date.now().toString().slice(-4)}-US`,
        estimatedDelivery: new Date(Date.now() + 4 * 86400000).toISOString().split('T')[0],
        events: [
          { time: new Date().toISOString(), status: 'Order Placed & Payment Authorized', location: 'System' }
        ]
      },
      ...orderPayload
    }
    orders.unshift(newOrder)
    return newOrder
  },

  // Auth
  async login(email, password) {
    const user = mockUsers.find(u => u.email.toLowerCase() === email.toLowerCase())
    if (!user) {
      // Allow fallback login with Sarah Connor
      return {
        user: mockUsers[0],
        token: `jwt_mock_${Date.now()}`
      }
    }
    return {
      user,
      token: `jwt_mock_${Date.now()}`
    }
  },

  async getProfile(userId) {
    return mockUsers.find(u => u.id === userId) || mockUsers[0]
  },

  // Inventory
  async getInventory() {
    return [...inventory]
  },

  async adjustStock(sku, delta, reason) {
    const item = inventory.find(i => i.sku === sku)
    if (item) {
      item.stockOnHand += delta
      item.available = item.stockOnHand - item.allocated
    }
    return item
  },

  // Tickets
  async getTickets() {
    return [...tickets]
  },

  async addTicketMessage(ticketId, text, sender = 'customer') {
    const ticket = tickets.find(t => t.id === ticketId)
    if (ticket) {
      const msg = {
        id: `msg_${Date.now()}`,
        sender,
        senderName: sender === 'customer' ? ticket.customer.name : 'Support Agent',
        timestamp: new Date().toISOString(),
        text
      }
      ticket.messages.push(msg)
      return msg
    }
    throw new Error('Ticket not found')
  },

  // Coupons
  async validateCoupon(code) {
    const coupon = coupons.find(c => c.code.toUpperCase() === code.toUpperCase() && c.isActive)
    if (!coupon) throw new Error('Invalid or expired coupon code')
    return coupon
  }
}
