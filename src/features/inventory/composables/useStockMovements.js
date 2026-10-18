import { ref } from 'vue'

export function useStockMovements() {
  const movements = ref([
    { id: 'sm_1', sku: 'AUR-HP-001', delta: +150, type: 'Inbound PO', warehouse: 'WH-SF-01', user: 'Operations WH1', time: '10:15 AM Today' },
    { id: 'sm_2', sku: 'TIT-WT-002', delta: -1, type: 'Order Fulfillment', warehouse: 'WH-SF-01', user: 'Auto Picker', time: '11:42 AM Today' },
    { id: 'sm_3', sku: 'LUM-DL-003', delta: -5, type: 'Damaged Transit', warehouse: 'WH-OAK-02', user: 'Lead Inspector', time: 'Yesterday' }
  ])

  return { movements }
}
