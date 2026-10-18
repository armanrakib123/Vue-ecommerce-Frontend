import { ORDER_STATUS, PAYMENT_STATUS } from '@/utils/constants.js'

export const mockOrders = [
  {
    id: 'ord_984210',
    orderNumber: 'NX-2026-984210',
    createdAt: '2026-10-15T14:32:00Z',
    customer: {
      id: 'usr_cust_01',
      name: 'Sarah Connor',
      email: 'sarah.customer@nexora.io',
    },
    items: [
      {
        id: 'item_1',
        productId: 'prod_001',
        title: 'Lumina Sound Pro ANC Wireless Headphones',
        variant: 'Matte Obsidian',
        price: 349.00,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&auto=format&fit=crop&q=80',
      },
      {
        id: 'item_2',
        productId: 'prod_004',
        title: 'AeroFlex 28L Weatherproof Commuter Backpack',
        variant: 'Slate Grey',
        price: 220.00,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&auto=format&fit=crop&q=80',
      }
    ],
    subtotal: 569.00,
    shippingFee: 0.00,
    discountAmount: 25.00,
    tax: 43.52,
    total: 587.52,
    status: ORDER_STATUS.SHIPPED,
    paymentStatus: PAYMENT_STATUS.PAID,
    paymentMethod: 'Credit Card (•••• 4242)',
    shippingAddress: {
      fullName: 'Sarah Connor',
      street: '742 Evergreen Terrace',
      city: 'San Francisco',
      state: 'CA',
      postalCode: '94107',
      country: 'United States',
      phone: '+1 (555) 234-5678',
    },
    tracking: {
      carrier: 'FedEx Express',
      trackingNumber: 'FX-8849-0192-US',
      estimatedDelivery: '2026-10-19',
      events: [
        { time: '2026-10-15T14:35:00Z', status: 'Order Placed & Payment Verified', location: 'System' },
        { time: '2026-10-16T09:12:00Z', status: 'Picked & Packed at SF Hub', location: 'San Francisco Central Hub' },
        { time: '2026-10-17T06:40:00Z', status: 'In Transit to Local Facility', location: 'Oakland Sort Facility' },
      ]
    }
  },
  {
    id: 'ord_984211',
    orderNumber: 'NX-2026-984211',
    createdAt: '2026-10-17T11:20:00Z',
    customer: {
      id: 'usr_cust_01',
      name: 'Sarah Connor',
      email: 'sarah.customer@nexora.io',
    },
    items: [
      {
        id: 'item_3',
        productId: 'prod_002',
        title: 'Chronos Vanguard Titanium Smartwatch',
        variant: 'Raw Brushed Titanium',
        price: 499.00,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&auto=format&fit=crop&q=80',
      }
    ],
    subtotal: 499.00,
    shippingFee: 15.00,
    discountAmount: 0.00,
    tax: 41.12,
    total: 555.12,
    status: ORDER_STATUS.PROCESSING,
    paymentStatus: PAYMENT_STATUS.PAID,
    paymentMethod: 'Apple Pay',
    shippingAddress: {
      fullName: 'Sarah Connor',
      street: '742 Evergreen Terrace',
      city: 'San Francisco',
      state: 'CA',
      postalCode: '94107',
      country: 'United States',
    },
    tracking: {
      carrier: 'DHL Express',
      trackingNumber: 'DHL-3910-4491-US',
      estimatedDelivery: '2026-10-21',
      events: [
        { time: '2026-10-17T11:22:00Z', status: 'Payment Authorized', location: 'System' },
        { time: '2026-10-17T13:00:00Z', status: 'Sent to Warehouse for Picking', location: 'San Francisco Central Hub' },
      ]
    }
  }
]
