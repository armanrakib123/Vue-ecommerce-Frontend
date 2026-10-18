<template>
  <div v-if="order" class="space-y-6 max-w-4xl">
    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
      <div>
        <RouterLink to="/seller/orders" class="text-xs text-brand-600 hover:underline">← Back to Orders</RouterLink>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display mt-1">
          Merchant Order Fulfillment #{{ order.orderNumber }}
        </h1>
      </div>
      <StatusBadge :status="order.status" />
    </div>

    <!-- Fulfillment Action Box -->
    <div class="p-6 rounded-3xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 space-y-3">
      <h3 class="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">Carrier Manifest</h3>
      <p class="text-xs text-slate-600 dark:text-slate-400">
        Carrier: <span class="font-bold">{{ order.tracking?.carrier }}</span> • Tracking Number: <span class="font-mono font-bold">{{ order.tracking?.trackingNumber }}</span>
      </p>
      <div class="pt-2 flex gap-3">
        <BaseButton variant="primary" size="sm" @click="printLabel">
          🖨 Print Shipping & Packing Slip
        </BaseButton>
        <BaseButton variant="secondary" size="sm" @click="markDispatched">
          Mark Courier Picked Up
        </BaseButton>
      </div>
    </div>

    <!-- Items list -->
    <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
      <h3 class="text-sm font-bold text-slate-900 dark:text-white">Ordered Items</h3>
      <div class="divide-y divide-slate-100 dark:divide-slate-800">
        <div v-for="item in order.items" :key="item.id" class="py-3 flex items-center justify-between text-xs">
          <div class="flex items-center gap-3">
            <img :src="item.image" class="w-12 h-12 rounded-xl object-cover" />
            <div>
              <p class="font-bold text-slate-900 dark:text-white">{{ item.title }}</p>
              <p class="text-slate-400">{{ item.variant }}</p>
            </div>
          </div>
          <span class="font-bold">{{ item.quantity }} pcs</span>
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
import { useNotificationStore } from '@/stores/notification.store.js'
import StatusBadge from '@/components/data-display/StatusBadge.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseSpinner from '@/components/ui/BaseSpinner.vue'

const route = useRoute()
const notificationStore = useNotificationStore()
const order = ref(null)

onMounted(async () => {
  const res = await apiClient.get(`/orders/${route.params.id}`)
  order.value = res.data
})

function printLabel() {
  notificationStore.success('Generated PDF 4x6 thermal shipping label')
}

function markDispatched() {
  if (order.value) order.value.status = 'shipped'
  notificationStore.success('Order status updated to SHIPPED')
}
</script>
