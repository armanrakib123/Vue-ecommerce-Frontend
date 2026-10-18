import { ref } from 'vue'

export function useReturns() {
  const returnList = ref([
    {
      id: 'ret_101',
      rmaNumber: 'RMA-2026-0418',
      orderNumber: 'NX-2026-8942',
      status: 'refunded',
      createdAt: 'Oct 10, 2026',
      refundAmount: 249.00,
      item: 'AuraStudio Pro Over-Ear Wireless',
      reason: 'Ordered wrong colorway (desired Obsidian instead of Silver)'
    }
  ])

  return { returnList }
}
