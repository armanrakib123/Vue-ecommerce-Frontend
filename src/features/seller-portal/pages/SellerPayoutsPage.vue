<template>
  <div class="space-y-6">
    <div>
      <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Earnings & Payouts</h1>
      <p class="text-xs text-slate-500">Settled direct deposits and pending merchant revenue</p>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="lg:col-span-1">
        <SellerPayoutSummary :pending="pendingBalance" />
      </div>
      <div class="lg:col-span-2 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4">
        <h3 class="text-sm font-bold text-slate-900 dark:text-white font-display">Payout History</h3>
        <div class="divide-y divide-slate-100 dark:divide-slate-800">
          <div v-for="p in payouts" :key="p.id" class="py-3 flex items-center justify-between text-xs">
            <div>
              <p class="font-bold text-slate-900 dark:text-white">{{ p.period }}</p>
              <p class="text-[10px] text-slate-400">ACH Deposit on {{ p.date }}</p>
            </div>
            <div class="text-right">
              <p class="font-mono font-bold text-slate-900 dark:text-white">${{ p.amount.toLocaleString() }}</p>
              <span class="text-[10px] text-emerald-600 font-bold uppercase">{{ p.status }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import SellerPayoutSummary from '../components/SellerPayoutSummary.vue'
import { useSellerPayouts } from '../composables/useSellerPayouts.js'
const { payouts, pendingBalance } = useSellerPayouts()
</script>
