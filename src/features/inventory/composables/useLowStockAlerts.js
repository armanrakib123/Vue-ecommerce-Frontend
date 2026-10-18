import { computed } from 'vue'
import { sharedInventory } from './useInventory.js'

export function useLowStockAlerts() {
  const lowStockItems = computed(() => {
    return sharedInventory.value.filter(i => i.stockOnHand <= i.reorderPoint)
  })
  return { lowStockItems }
}
