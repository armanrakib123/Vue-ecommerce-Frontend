import { ref } from 'vue'

export function useLoyaltyPoints() {
  const points = ref(2450)
  const tier = ref('Platinum Obsidian')
  const nextTierPoints = ref(3000)
  const history = ref([
    { id: 'lh_1', title: 'Order NX-2026-8942 Earned Points', points: '+349', date: 'Oct 14, 2026' },
    { id: 'lh_2', title: 'Redeemed $25 Store Voucher', points: '-500', date: 'Sep 28, 2026' },
    { id: 'lh_3', title: 'Product Review Bonus', points: '+100', date: 'Sep 15, 2026' },
    { id: 'lh_4', title: 'Birthday Anniversary Perk', points: '+500', date: 'Aug 20, 2026' }
  ])

  return { points, tier, nextTierPoints, history }
}
