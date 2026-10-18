import { defineStore } from 'pinia'
import { ref } from 'vue'
import { mockCoupons } from '@/mocks/fixtures/coupons.json.js'

export const usePromotionsStore = defineStore('promotions', () => {
  const coupons = ref([...mockCoupons])
  const activeBanners = ref([
    { id: 'b_1', title: 'Autumn Tech Gala: Save 20% Sitewide', code: 'FALL20', expires: 'Nov 30, 2026' },
    { id: 'b_2', title: 'New Customer Welcome: $50 Off Over $200', code: 'NEXORA50', expires: 'Dec 31, 2026' }
  ])

  return { coupons, activeBanners }
})
