<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
      <div>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Global Orders Pipeline</h1>
        <p class="text-xs text-slate-500">Order verification, dispatch queue, and fulfillment tracking</p>
      </div>
      <div class="flex gap-2">
        <select
          v-model="statusFilter"
          class="px-3 py-1.5 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl font-medium outline-none"
        >
          <option value="all">All Statuses</option>
          <option value="confirmed">Confirmed</option>
          <option value="processing">Processing</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
        </select>
      </div>
    </div>

    <DataTable
      :columns="columns"
      :rows="filteredOrders"
      :show-search="true"
      search-placeholder="Filter by Order # or Customer..."
      v-model:search-query="search"
    >
      <template #orderNumber="{ row }">
        <div>
          <span class="font-mono font-bold text-xs">{{ row.orderNumber }}</span>
          <p class="text-[10px] text-slate-400">{{ formatDate(row.createdAt) }}</p>
        </div>
      </template>

      <template #customer="{ row }">
        <div>
          <p class="text-xs font-bold text-slate-900 dark:text-white">{{ row.customer?.name }}</p>
          <p class="text-[11px] text-slate-400">{{ row.customer?.email }}</p>
        </div>
      </template>

      <template #total="{ row }">
        <span class="font-bold text-xs">{{ formatCurrency(row.total) }}</span>
      </template>

      <template #paymentMethod="{ row }">
        <span class="text-xs text-slate-600 dark:text-slate-300">{{ row.paymentMethod }}</span>
      </template>

      <template #status="{ row }">
        <StatusBadge :status="row.status" />
      </template>

      <template #actions="{ row }">
        <div class="flex items-center justify-end gap-2">
          <RouterLink :to="`/account/orders/${row.id}`" class="text-xs font-bold text-brand-600 hover:underline">
            Inspect
          </RouterLink>
          <button class="text-xs font-bold text-emerald-600 hover:underline" @click="advanceOrder(row)">
            Next State →
          </button>
        </div>
      </template>
    </DataTable>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { mockOrders } from '@/mocks/fixtures/orders.json.js'
import { formatDate } from '@/utils/format-date.js'
import { formatCurrency } from '@/utils/format-currency.js'
import { useNotificationStore } from '@/stores/notification.store.js'
import DataTable from '@/components/data-display/DataTable.vue'
import StatusBadge from '@/components/data-display/StatusBadge.vue'

const notificationStore = useNotificationStore()
const search = ref('')
const statusFilter = ref('all')
const orders = ref([...mockOrders])

const columns = [
  { key: 'orderNumber', label: 'Order & Date' },
  { key: 'customer', label: 'Buyer' },
  { key: 'total', label: 'Amount' },
  { key: 'paymentMethod', label: 'Gateway' },
  { key: 'status', label: 'Status' },
  { key: 'actions', label: 'Fulfillment', align: 'right' }
]

const filteredOrders = computed(() => {
  let list = orders.value
  if (statusFilter.value !== 'all') {
    list = list.filter(o => o.status === statusFilter.value)
  }
  if (search.value.trim()) {
    const q = search.value.toLowerCase()
    list = list.filter(o => o.orderNumber.toLowerCase().includes(q) || o.customer?.name.toLowerCase().includes(q))
  }
  return list
})

function advanceOrder(row) {
  if (row.status === 'confirmed') row.status = 'processing'
  else if (row.status === 'processing') row.status = 'shipped'
  else if (row.status === 'shipped') row.status = 'delivered'
  notificationStore.success(`Order ${row.orderNumber} state transitioned to "${row.status.toUpperCase()}"`)
}
</script>
