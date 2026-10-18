<template>
  <div class="space-y-6">
    <div class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Inventory Movement Log</h1>
      <p class="text-xs text-slate-500">Real-time ledger of put-away, cross-docking, picking, and returns intake</p>
    </div>

    <DataTable :columns="columns" :rows="movements">
      <template #delta="{ row }">
        <span :class="['font-mono font-bold text-xs', row.delta > 0 ? 'text-emerald-600' : 'text-rose-600']">
          {{ row.delta > 0 ? `+${row.delta}` : row.delta }} units
        </span>
      </template>
    </DataTable>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DataTable from '@/components/data-display/DataTable.vue'

const columns = [
  { key: 'time', label: 'Time (PST)' },
  { key: 'sku', label: 'SKU' },
  { key: 'type', label: 'Movement Operation' },
  { key: 'delta', label: 'Quantity' },
  { key: 'operator', label: 'RF Operator' }
]

const movements = ref([
  { time: '14:22:10', sku: 'LUM-ANC-01', type: 'Order Pick (Wave #881)', delta: -1, operator: 'Devon Miles' },
  { time: '13:50:00', sku: 'CHR-VAN-02', type: 'Order Pick (Wave #881)', delta: -1, operator: 'Devon Miles' },
  { time: '11:15:30', sku: 'ZEN-LMP-03', type: 'Manufacturer Pallet Intake', delta: 50, operator: 'Automated AGV' },
  { time: '09:40:12', sku: 'AERO-28-04', type: 'RMA Customer Return Inspection', delta: 1, operator: 'Elena Rostova' }
])
</script>
