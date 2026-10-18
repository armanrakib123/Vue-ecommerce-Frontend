<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
      <div>
        <h2 class="text-xl font-black text-slate-900 dark:text-white font-display">My Orders</h2>
        <p class="text-xs text-slate-500">Track shipments, download invoices, and initiate returns</p>
      </div>
    </div>

    <div v-if="orders.length === 0" class="py-12">
      <BaseEmptyState title="No orders found" description="You have not placed any orders yet." />
    </div>

    <div v-else class="space-y-4">
      <div
        v-for="order in orders"
        :key="order.id"
        class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4"
      >
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div class="flex items-center gap-3">
            <span class="text-xs font-mono font-bold text-slate-900 dark:text-white">{{ order.orderNumber }}</span>
            <span class="text-xs text-slate-400">• {{ formatDate(order.createdAt) }}</span>
          </div>
          <div class="flex items-center gap-3">
            <StatusBadge :status="order.status" />
            <RouterLink
              :to="`/account/orders/${order.id}`"
              class="text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline"
            >
              Order Details & Tracking →
            </RouterLink>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="space-y-2">
            <div v-for="item in order.items" :key="item.id" class="flex items-center gap-3 text-xs">
              <img :src="item.image" :alt="item.title" class="w-12 h-12 rounded-xl object-cover bg-slate-100 flex-shrink-0" />
              <div class="min-w-0">
                <p class="font-bold text-slate-800 dark:text-slate-200 truncate">{{ item.title }}</p>
                <p class="text-slate-400">Qty: {{ item.quantity }} × {{ formatCurrency(item.price) }}</p>
              </div>
            </div>
          </div>

          <div class="sm:text-right flex flex-col justify-between text-xs text-slate-500">
            <div>
              <p>Carrier: <span class="font-bold text-slate-800 dark:text-slate-200">{{ order.tracking?.carrier || 'FedEx' }}</span></p>
              <p>Tracking #: <span class="font-mono text-brand-600 font-bold">{{ order.tracking?.trackingNumber }}</span></p>
            </div>
            <div class="pt-2">
              <span class="text-xs text-slate-400">Total Paid: </span>
              <span class="text-base font-black text-slate-900 dark:text-white">{{ formatCurrency(order.total) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import apiClient from '@/services/http/client.js'
import { formatDate } from '@/utils/format-date.js'
import { formatCurrency } from '@/utils/format-currency.js'
import StatusBadge from '@/components/data-display/StatusBadge.vue'
import BaseEmptyState from '@/components/ui/BaseEmptyState.vue'

const orders = ref([])

onMounted(async () => {
  const res = await apiClient.get('/orders')
  orders.value = res.data || []
})
</script>
