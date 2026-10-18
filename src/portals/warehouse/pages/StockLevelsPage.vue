<template>
  <div class="space-y-6">
    <div class="border-b border-slate-200 dark:border-slate-800 pb-4 flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Aisle & Bin Stock Levels</h1>
        <p class="text-xs text-slate-500">Live RFID tracking by bin location across San Francisco Hub</p>
      </div>
      <BaseButton variant="primary" size="sm" @click="auditScan">
        Scan RF Barcode
      </BaseButton>
    </div>

    <DataTable :columns="columns" :rows="inventory">
      <template #product="{ row }">
        <div>
          <p class="text-xs font-bold text-slate-900 dark:text-white">{{ row.productName }}</p>
          <p class="text-[10px] text-slate-400 font-mono">{{ row.sku }}</p>
        </div>
      </template>

      <template #binLocation="{ row }">
        <span class="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 font-mono text-xs font-bold text-brand-600">
          {{ row.binLocation }}
        </span>
      </template>

      <template #status="{ row }">
        <StatusBadge :status="row.status" />
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
import BaseButton from '@/components/ui/BaseButton.vue'

const notificationStore = useNotificationStore()
const inventory = ref([...mockInventory])

const columns = [
  { key: 'product', label: 'Item & SKU' },
  { key: 'binLocation', label: 'Physical Bin Location' },
  { key: 'stockOnHand', label: 'Physical On Hand' },
  { key: 'available', label: 'Allocatable' },
  { key: 'status', label: 'State' }
]

function auditScan() {
  notificationStore.success('RF Scanner linked! Scan any 2D DataMatrix or QR code.')
}
</script>
