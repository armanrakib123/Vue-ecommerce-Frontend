<template>
  <div class="space-y-6 max-w-4xl">
    <div class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Omni-Channel Customer & Order Lookup</h1>
      <p class="text-xs text-slate-500">Cross-reference buyer orders, carrier tracking numbers, and RMA claims</p>
    </div>

    <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
      <div class="flex gap-3">
        <input
          v-model="query"
          type="text"
          placeholder="Enter Order # (e.g. NX-2026-984210), email, or tracking #"
          class="flex-1 text-xs px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-sky-500 outline-none"
          @keyup.enter="search"
        />
        <BaseButton variant="primary" @click="search">
          Lookup
        </BaseButton>
      </div>

      <div v-if="results.length > 0" class="pt-4 space-y-3">
        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400">Search Results</h4>
        <div v-for="res in results" :key="res.id" class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
          <div>
            <p class="font-bold text-slate-900 dark:text-white">{{ res.orderNumber }} — {{ res.customer.name }} ({{ res.customer.email }})</p>
            <p class="text-slate-400">{{ res.tracking?.carrier }}: {{ res.tracking?.trackingNumber }}</p>
          </div>
          <div class="flex items-center gap-3">
            <StatusBadge :status="res.status" />
            <RouterLink :to="`/account/orders/${res.id}`" class="text-sky-600 font-bold hover:underline">
              Inspect Order →
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { mockOrders } from '@/mocks/fixtures/orders.json.js'
import BaseButton from '@/components/ui/BaseButton.vue'
import StatusBadge from '@/components/data-display/StatusBadge.vue'

const query = ref('')
const results = ref([...mockOrders])

function search() {
  const q = query.value.trim().toLowerCase()
  if (!q) {
    results.value = [...mockOrders]
    return
  }
  results.value = mockOrders.filter(o =>
    o.orderNumber.toLowerCase().includes(q) ||
    o.customer.email.toLowerCase().includes(q) ||
    o.customer.name.toLowerCase().includes(q) ||
    o.tracking?.trackingNumber.toLowerCase().includes(q)
  )
}
</script>
