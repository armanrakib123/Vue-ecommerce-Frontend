import { ref } from 'vue'
import { mockInventory } from '@/mocks/fixtures/inventory.json.js'

export const sharedInventory = ref([...mockInventory])

export function useInventory() {
  const inventory = sharedInventory

  function adjustStock(sku, delta) {
    const item = inventory.value.find(i => i.sku === sku)
    if (item) {
      item.stockOnHand += delta
      item.available = item.stockOnHand - item.allocated
    }
  }

  return { inventory, adjustStock }
}
