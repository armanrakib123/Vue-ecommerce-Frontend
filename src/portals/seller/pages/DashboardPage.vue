<template>
  <div class="space-y-8">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Merchant Command Center</h1>
        <p class="text-xs text-slate-500">Store analytics, catalog performance, and next-day payout status</p>
      </div>

      <div class="flex items-center gap-3">
        <RouterLink to="/seller/products/new" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl font-bold text-xs transition shadow-sm">
          + Add New Product
        </RouterLink>
        <RouterLink to="/seller/payouts" class="px-4 py-2 bg-slate-900 dark:bg-slate-800 text-white rounded-xl font-bold text-xs hover:bg-slate-800 transition">
          Payouts ($14,280.00)
        </RouterLink>
      </div>
    </div>

    <!-- Merchant KPIs -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard title="30-Day Revenue" value="$48,910.00" :change="12.4" description="Store Gross Sales" />
      <StatCard title="Orders to Ship" value="14" description="Within 24h SLA" />
      <StatCard title="Merchant Trust Score" value="4.92 / 5.0" description="Top 5% Merchant Badge" />
      <StatCard title="Active Listings" value="48" description="4 variants low stock" />
    </div>

    <!-- Merchant Orders Table -->
    <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm space-y-4">
      <div class="flex items-center justify-between">
        <h3 class="text-sm font-bold text-slate-900 dark:text-white">Recent Store Orders</h3>
        <RouterLink to="/seller/orders" class="text-xs font-bold text-brand-600 hover:underline">
          View All Orders →
        </RouterLink>
      </div>

      <BaseTable :columns="columns" :rows="orders">
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
          <RouterLink :to="`/seller/orders/${row.id}`" class="text-xs font-bold text-brand-600 hover:underline">
            Process Shipment →
          </RouterLink>
        </template>
      </BaseTable>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { mockOrders } from '@/mocks/fixtures/orders.json.js'
import { formatCurrency } from '@/utils/format-currency.js'
import StatCard from '@/components/data-display/StatCard.vue'
import BaseTable from '@/components/ui/BaseTable.vue'
import StatusBadge from '@/components/data-display/StatusBadge.vue'

const orders = ref(mockOrders)

const columns = [
  { key: 'orderNumber', label: 'Order ID' },
  { key: 'createdAt', label: 'Timestamp' },
  { key: 'total', label: 'Total' },
  { key: 'status', label: 'Shipment' },
  { key: 'actions', label: 'Fulfillment', align: 'right' }
]
</script>
