<template>
  <div class="space-y-6">
    <div class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Merchant Orders & Dispatch Queue</h1>
      <p class="text-xs text-slate-500">Orders requiring merchant fulfillment packaging and carrier pickup</p>
    </div>

    <DataTable :columns="columns" :rows="orders">
      <template #orderNumber="{ row }">
        <span class="font-mono font-bold text-xs">{{ row.orderNumber }}</span>
      </template>
      <template #total="{ row }">
        <span class="font-bold text-xs">{{ formatCurrency(row.total) }}</span>
      </template>
      <template #status="{ row }">
        <StatusBadge :status="row.status" />
      </template>
      <template #actions="{ row }">
        <RouterLink :to="`/seller/orders/${row.id}`" class="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline">
          Fulfill Order →
        </RouterLink>
      </template>
    </DataTable>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { mockOrders } from '@/mocks/fixtures/orders.json.js'
import { formatCurrency } from '@/utils/format-currency.js'
import DataTable from '@/components/data-display/DataTable.vue'
import StatusBadge from '@/components/data-display/StatusBadge.vue'

const orders = ref([...mockOrders])

const columns = [
  { key: 'orderNumber', label: 'Order ID' },
  { key: 'createdAt', label: 'Order Date' },
  { key: 'total', label: 'Net Amount' },
  { key: 'status', label: 'Fulfillment State' },
  { key: 'actions', label: 'Action', align: 'right' }
]
</script>
