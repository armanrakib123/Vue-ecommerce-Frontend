import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSellerStore = defineStore('seller', () => {
  const storeProfile = ref({
    storeName: 'AuraTech Sound Labs',
    legalEntity: 'AuraTech Acoustics Inc.',
    taxId: 'US-94-827419',
    supportEmail: 'merchant@auratech.io',
    verified: true,
    rating: 4.95,
    joinedDate: '2024'
  })

  const stats = ref({
    grossRevenue: 84250.00,
    monthlyOrders: 312,
    activeListings: 18,
    returnRate: 0.8
  })

  return { storeProfile, stats }
})
