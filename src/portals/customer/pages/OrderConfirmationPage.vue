<template>
  <div class="max-w-3xl mx-auto px-4 py-16 text-center space-y-8">
    <div class="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto text-3xl font-black shadow-lg">
      ✓
    </div>

    <div>
      <span class="text-xs uppercase font-bold tracking-widest text-brand-600 dark:text-brand-400">Order Confirmed</span>
      <h1 class="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white font-display mt-1">
        Thank You for Your Order!
      </h1>
      <p class="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mt-2">
        We've received your payment and our automated warehouse fulfillment pipeline has initiated picking and serialization.
      </p>
    </div>

    <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm text-left space-y-4">
      <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
        <div>
          <span class="text-[10px] text-slate-400 uppercase font-bold">Order Identifier</span>
          <p class="text-sm font-bold text-slate-900 dark:text-white font-mono">{{ orderId || 'NX-2026-984210' }}</p>
        </div>
        <StatusBadge status="confirmed" />
      </div>

      <div class="grid grid-cols-2 gap-4 text-xs">
        <div>
          <span class="text-slate-400 font-medium">Estimated Delivery:</span>
          <p class="font-bold text-slate-800 dark:text-slate-200 mt-0.5">3-5 Business Days (FedEx Priority)</p>
        </div>
        <div>
          <span class="text-slate-400 font-medium">Tracking Updates Sent To:</span>
          <p class="font-bold text-slate-800 dark:text-slate-200 mt-0.5">{{ authStore.user?.email || 'customer@nexora.io' }}</p>
        </div>
      </div>
    </div>

    <div class="flex justify-center gap-4">
      <RouterLink
        to="/account/orders"
        class="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-sm transition"
      >
        View Order in Dashboard
      </RouterLink>
      <RouterLink
        to="/products"
        class="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 font-bold text-xs transition"
      >
        Continue Shopping
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth.store.js'
import StatusBadge from '@/components/data-display/StatusBadge.vue'

const route = useRoute()
const authStore = useAuthStore()

const orderId = computed(() => route.query.orderId)
</script>
