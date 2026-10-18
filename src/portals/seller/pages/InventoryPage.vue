<template>
  <div class="space-y-6">
    <div class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Merchant Stock Management</h1>
      <p class="text-xs text-slate-500">Live units in fulfillment network allocated to AuraTech Gear</p>
    </div>

    <DataTable :columns="columns" :rows="inventory">
      <template #product="{ row }">
        <div>
          <p class="text-xs font-bold text-slate-900 dark:text-white">{{ row.productName }}</p>
          <p class="text-[10px] text-slate-400 font-mono">{{ row.sku }}</p>
        </div>
      </template>

      <template #status="{ row }">
        <StatusBadge :status="row.status" />
      </template>

      <template #actions="{ row }">
        <button class="text-xs font-bold text-amber-600 hover:underline" @click="requestRestock(row)">
          Request Inbound Shipment
        </button>
      </template>
    </DataTable>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { mockInventory } from '@/mocks/fixtures/inventory.json.js'
import { useNotificationStore } from '@/stores/notification.store.js'
import DataTable from '@/components/data-display/DataTable.vue'
import StatusBadge from '@/components/data-display/StatusBadge.vue'

const notificationStore = useNotificationStore()
const inventory = ref(mockInventory.slice(0, 2))

const columns = [
  { key: 'product', label: 'Item & SKU' },
  { key: 'warehouse', label: 'Assigned Hub' },
  { key: 'stockOnHand', label: 'Stock On Hand' },
  { key: 'available', label: 'Available' },
  { key: 'status', label: 'State' },
  { key: 'actions', label: 'Replenishment', align: 'right' }
]

function requestRestock(row) {
  notificationStore.info(`Generated inbound freight manifest for ${row.sku} to ${row.warehouse}`)
}
</script>
