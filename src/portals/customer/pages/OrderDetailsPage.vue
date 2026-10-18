<template>
  <div v-if="order" class="space-y-6">
    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
      <div>
        <div class="flex items-center gap-2">
          <RouterLink to="/account/orders" class="text-xs text-brand-600 hover:underline">← All Orders</RouterLink>
          <span class="text-xs text-slate-400">/</span>
          <span class="text-xs font-mono font-bold">{{ order.orderNumber }}</span>
        </div>
        <h2 class="text-2xl font-black text-slate-900 dark:text-white font-display mt-1">
          Order Details
        </h2>
      </div>
      <StatusBadge :status="order.status" />
    </div>

    <!-- Live Tracking Timeline -->
    <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
      <div class="flex items-center justify-between">
        <h3 class="text-sm font-bold text-slate-900 dark:text-white">Shipment Tracking</h3>
        <span class="text-xs font-mono font-bold text-brand-600 bg-brand-50 dark:bg-brand-950/60 px-2.5 py-1 rounded-lg">
          {{ order.tracking?.carrier }} • {{ order.tracking?.trackingNumber }}
        </span>
      </div>

      <div class="relative border-l-2 border-brand-500 ml-3 pl-6 space-y-6 py-2">
        <div v-for="(evt, idx) in order.tracking?.events" :key="idx" class="relative">
          <span class="absolute -left-[31px] top-0.5 w-3.5 h-3.5 rounded-full bg-brand-600 ring-4 ring-white dark:ring-slate-900"></span>
          <p class="text-xs font-bold text-slate-900 dark:text-white">{{ evt.status }}</p>
          <p class="text-[11px] text-slate-400">{{ evt.location }} • {{ formatDate(evt.time) }}</p>
        </div>
      </div>
    </div>

    <!-- Order Items Breakdown -->
    <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
      <h3 class="text-sm font-bold text-slate-900 dark:text-white">Items in this Delivery</h3>
      <div class="divide-y divide-slate-100 dark:divide-slate-800">
        <div v-for="item in order.items" :key="item.id" class="py-3 flex items-center justify-between text-xs">
          <div class="flex items-center gap-3">
            <img :src="item.image" :alt="item.title" class="w-12 h-12 rounded-xl object-cover bg-slate-100" />
            <div>
              <p class="font-bold text-slate-800 dark:text-slate-200">{{ item.title }}</p>
              <p class="text-slate-400">Finish: {{ item.variant }}</p>
            </div>
          </div>
          <div class="text-right">
            <p class="font-bold">{{ formatCurrency(item.price * item.quantity) }}</p>
            <p class="text-slate-400">{{ item.quantity }} × {{ formatCurrency(item.price) }}</p>
          </div>
        </div>
      </div>

      <!-- Financial Totals -->
      <div class="border-t border-slate-100 dark:border-slate-800 pt-4 space-y-2 text-xs text-slate-500">
        <div class="flex justify-between">
          <span>Subtotal</span>
          <span class="font-bold text-slate-900 dark:text-slate-100">{{ formatCurrency(order.subtotal) }}</span>
        </div>
        <div v-if="order.discountAmount > 0" class="flex justify-between text-emerald-600">
          <span>Discount</span>
          <span class="font-bold">-{{ formatCurrency(order.discountAmount) }}</span>
        </div>
        <div class="flex justify-between">
          <span>Shipping Fee</span>
          <span class="font-bold text-slate-900 dark:text-slate-100">{{ formatCurrency(order.shippingFee) }}</span>
        </div>
        <div class="flex justify-between">
          <span>Taxes</span>
          <span class="font-bold text-slate-900 dark:text-slate-100">{{ formatCurrency(order.tax) }}</span>
        </div>
        <div class="flex justify-between text-sm font-extrabold text-slate-900 dark:text-white pt-2 border-t">
          <span>Total Paid</span>
          <span class="text-brand-600 dark:text-brand-400">{{ formatCurrency(order.total) }}</span>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="py-20 text-center">
    <BaseSpinner size="lg" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import apiClient from '@/services/http/client.js'
import { formatDate } from '@/utils/format-date.js'
import { formatCurrency } from '@/utils/format-currency.js'
import StatusBadge from '@/components/data-display/StatusBadge.vue'
import BaseSpinner from '@/components/ui/BaseSpinner.vue'

const route = useRoute()
const order = ref(null)

onMounted(async () => {
  const id = route.params.id
  const res = await apiClient.get(`/orders/${id}`)
  order.value = res.data
})
</script>
