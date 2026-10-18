<template>
  <div class="space-y-8">
    <!-- Top Welcome Header -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">
          Enterprise Operational Dashboard
        </h1>
        <p class="text-xs text-slate-500 mt-1">Multi-channel commerce performance and live operational telemetry</p>
      </div>

      <div class="flex items-center gap-2">
        <BaseButton variant="outline" size="sm" @click="exportReport">
          Export Ledger
        </BaseButton>
        <BaseButton variant="primary" size="sm" @click="$router.push('/admin/products')">
          Manage Catalog
        </BaseButton>
      </div>
    </div>

    <!-- Key Metrics Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <StatCard title="Gross Merchandise Value" value="$148,920.00" :change="14.8" description="Month-to-date net revenue" />
      <StatCard title="Active Order Velocity" value="482" :change="8.2" description="Orders in dispatch pipeline" />
      <StatCard title="Fulfillment SLA Rate" value="99.4%" :change="0.5" description="24h dispatch compliance" />
      <StatCard title="Customer Satisfaction" value="4.88 / 5.0" :change="1.2" description="Based on 1,420 review submissions" />
    </div>

    <!-- Live Recent Orders Table -->
    <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm space-y-4">
      <div class="flex items-center justify-between">
        <div>
          <h3 class="text-sm font-bold text-slate-900 dark:text-white">Recent Global Orders</h3>
          <p class="text-xs text-slate-400">Live order stream across all merchant storefronts</p>
        </div>
        <RouterLink to="/admin/orders" class="text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline">
          View All Orders →
        </RouterLink>
      </div>

      <BaseTable :columns="orderColumns" :rows="recentOrders">
        <template #orderNumber="{ row }">
          <span class="font-mono font-bold text-xs">{{ row.orderNumber }}</span>
        </template>
        <template #customer="{ row }">
          <span class="font-semibold text-xs text-slate-800 dark:text-slate-200">{{ row.customer?.name }}</span>
        </template>
        <template #total="{ row }">
          <span class="font-bold text-xs">{{ formatCurrency(row.total) }}</span>
        </template>
        <template #status="{ row }">
          <StatusBadge :status="row.status" />
        </template>
        <template #actions="{ row }">
          <RouterLink :to="`/account/orders/${row.id}`" class="text-xs font-bold text-brand-600 hover:underline">
            Inspect
          </RouterLink>
        </template>
      </BaseTable>
    </div>

    <!-- Inventory Alert & High Velocity Hardware -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm space-y-4">
        <h3 class="text-sm font-bold text-slate-900 dark:text-white">High Velocity Stock Movements</h3>
        <div class="space-y-3">
          <div v-for="item in topProducts" :key="item.id" class="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 text-xs">
            <div class="flex items-center gap-3">
              <img :src="item.thumbnail" class="w-10 h-10 rounded-xl object-cover" />
              <div>
                <p class="font-bold text-slate-800 dark:text-slate-200 truncate">{{ item.name }}</p>
                <p class="text-slate-400">{{ item.brand }}</p>
              </div>
            </div>
            <div class="text-right">
              <p class="font-bold">{{ formatCurrency(item.price) }}</p>
              <p class="text-emerald-600 font-semibold">{{ item.stockQuantity }} units in stock</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm space-y-4">
        <h3 class="text-sm font-bold text-slate-900 dark:text-white">System Security & Audit Heartbeat</h3>
        <div class="space-y-3 text-xs">
          <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 flex justify-between items-center">
            <span>Identity Provider & SSO</span>
            <span class="text-emerald-500 font-bold">100% Operational</span>
          </div>
          <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 flex justify-between items-center">
            <span>Stripe & Adyen Payment Gateway</span>
            <span class="text-emerald-500 font-bold">Latency 120ms (Healthy)</span>
          </div>
          <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 flex justify-between items-center">
            <span>Automated Warehouse Pick Routing</span>
            <span class="text-emerald-500 font-bold">Active (Hub SF-01)</span>
          </div>
          <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 flex justify-between items-center">
            <span>Database Replication Lag</span>
            <span class="text-emerald-500 font-bold">&lt; 14ms (Optimal)</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { mockOrders } from '@/mocks/fixtures/orders.json.js'
import { mockProducts } from '@/mocks/fixtures/products.json.js'
import { formatCurrency } from '@/utils/format-currency.js'
import { useNotificationStore } from '@/stores/notification.store.js'
import StatCard from '@/components/data-display/StatCard.vue'
import BaseTable from '@/components/ui/BaseTable.vue'
import StatusBadge from '@/components/data-display/StatusBadge.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const notificationStore = useNotificationStore()
const recentOrders = ref(mockOrders)
const topProducts = ref(mockProducts.slice(0, 4))

const orderColumns = [
  { key: 'orderNumber', label: 'Order ID' },
  { key: 'customer', label: 'Customer' },
  { key: 'total', label: 'Amount' },
  { key: 'status', label: 'State' },
  { key: 'actions', label: 'Manage', align: 'right' }
]

function exportReport() {
  notificationStore.success('Enterprise ledger exported to CSV successfully')
}
</script>
