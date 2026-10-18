<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
      <div>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Merchant Sales Analytics</h1>
        <p class="text-xs text-slate-500">Historical performance, SKU velocity, and return ratios</p>
      </div>
      <BaseButton variant="primary" size="sm" @click="downloadReport">
        Download PDF Summary
      </BaseButton>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <StatCard title="Total Units Sold" value="1,842" :change="18.2" description="YTD unit volume" />
      <StatCard title="Gross Merchandise" value="$298,400.00" :change="14.1" description="Total marketplace gross" />
      <StatCard title="Store Return Rate" value="1.2%" description="Below target 2.0%" />
    </div>

    <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
      <h3 class="text-sm font-bold text-slate-900 dark:text-white">Monthly Sales Breakdown (2026)</h3>
      <div class="space-y-3">
        <div v-for="m in monthly" :key="m.month" class="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 text-xs">
          <span class="font-bold text-slate-800 dark:text-slate-200">{{ m.month }}</span>
          <span class="text-slate-500">{{ m.units }} items sold</span>
          <span class="font-mono font-bold text-brand-600 dark:text-brand-400">{{ formatCurrency(m.revenue) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { formatCurrency } from '@/utils/format-currency.js'
import { useNotificationStore } from '@/stores/notification.store.js'
import StatCard from '@/components/data-display/StatCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const notificationStore = useNotificationStore()

const monthly = ref([
  { month: 'October 2026 (MTD)', units: 284, revenue: 48910.00 },
  { month: 'September 2026', units: 412, revenue: 64200.00 },
  { month: 'August 2026', units: 390, revenue: 58400.00 },
  { month: 'July 2026', units: 340, revenue: 52100.00 }
])

function downloadReport() {
  notificationStore.success('Generated PDF financial report for tax compliance!')
}
</script>
