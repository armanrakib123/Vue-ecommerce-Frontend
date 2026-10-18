import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { STORAGE_KEYS } from '@/utils/constants.js'
import { storage } from '@/services/storage/local-storage.js'
import { mockProducts } from '@/mocks/fixtures/products.json.js'

export const useCartStore = defineStore('cart', () => {
  // Prepopulate with a default item for instant lively feeling
  const initialItems = [
    {
      id: 'cart_item_1',
      productId: mockProducts[0].id,
      slug: mockProducts[0].slug,
      name: mockProducts[0].name,
      variantName: 'Matte Obsidian',
      price: mockProducts[0].price,
      quantity: 1,
      image: mockProducts[0].thumbnail,
      sku: mockProducts[0].sku,
      inStock: true
    }
  ]

  const items = ref(storage.get(STORAGE_KEYS.CART, initialItems))
  const appliedCoupon = ref(null)
  const shippingMethod = ref('standard')

  const totalItemsCount = computed(() => {
    return items.value.reduce((total, item) => total + item.quantity, 0)
  })

  const subtotal = computed(() => {
    return items.value.reduce((total, item) => total + (item.price * item.quantity), 0)
  })

  const discountAmount = computed(() => {
    if (!appliedCoupon.value) return 0
    if (appliedCoupon.value.type === 'percentage') {
      return (subtotal.value * appliedCoupon.value.discount) / 100
    }
    if (appliedCoupon.value.type === 'fixed') {
      return Math.min(appliedCoupon.value.discount, subtotal.value)
    }
    return 0
  })

  const shippingCost = computed(() => {
    if (subtotal.value === 0) return 0
    if (appliedCoupon.value?.type === 'free_shipping') return 0
    if (subtotal.value > 150) return 0 // Free shipping threshold
    return shippingMethod.value === 'express' ? 18.00 : 9.99
  })

  const estimatedTax = computed(() => {
    const taxableAmount = Math.max(0, subtotal.value - discountAmount.value)
    return taxableAmount * 0.0825 // 8.25% CA Sales Tax
  })

  const grandTotal = computed(() => {
    return Math.max(0, subtotal.value - discountAmount.value + shippingCost.value + estimatedTax.value)
  })

  function syncStorage() {
    storage.set(STORAGE_KEYS.CART, items.value)
  }

  function addItem(product, variant = null, quantity = 1) {
    const existingIndex = items.value.findIndex(item => {
      const matchProduct = item.productId === product.id
      const matchVariant = variant ? item.variantName === variant.name : true
      return matchProduct && matchVariant
    })

    if (existingIndex > -1) {
      items.value[existingIndex].quantity += quantity
    } else {
      items.value.push({
        id: `cart_item_${Date.now()}`,
        productId: product.id,
        slug: product.slug,
        name: product.name,
        variantName: variant ? variant.name : 'Standard Edition',
        price: variant ? variant.price : product.price,
        quantity,
        image: product.thumbnail || (product.images && product.images[0]),
        sku: product.sku,
        inStock: true
      })
    }
    syncStorage()
  }

  function updateQuantity(itemId, quantity) {
    const item = items.value.find(i => i.id === itemId)
    if (item) {
      if (quantity <= 0) {
        removeItem(itemId)
      } else {
        item.quantity = quantity
        syncStorage()
      }
    }
  }

  function removeItem(itemId) {
    items.value = items.value.filter(i => i.id !== itemId)
    syncStorage()
  }

  function applyCoupon(coupon) {
    appliedCoupon.value = coupon
  }

  function removeCoupon() {
    appliedCoupon.value = null
  }

  function setShippingMethod(method) {
    shippingMethod.value = method
  }

  function clearCart() {
    items.value = []
    appliedCoupon.value = null
    syncStorage()
  }

  return {
    items,
    appliedCoupon,
    shippingMethod,
    totalItemsCount,
    subtotal,
    discountAmount,
    shippingCost,
    estimatedTax,
    grandTotal,
    addItem,
    updateQuantity,
    removeItem,
    applyCoupon,
    removeCoupon,
    setShippingMethod,
    clearCart,
  }
})
