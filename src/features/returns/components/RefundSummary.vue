<template>
  <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2 text-xs">
    <div class="flex justify-between text-slate-600 dark:text-slate-400">
      <span>Returned Item Value:</span>
      <span>${{ amount.toFixed(2) }}</span>
    </div>
    <div class="flex justify-between text-slate-600 dark:text-slate-400">
      <span>Restocking Fee:</span>
      <span class="text-emerald-600 font-bold">$0.00 (Waived)</span>
    </div>
    <div class="flex justify-between font-bold text-slate-900 dark:text-white pt-2 border-t border-slate-200 dark:border-slate-800">
      <span>Total Estimated Refund:</span>
      <span class="text-emerald-600 font-mono">${{ amount.toFixed(2) }}</span>
    </div>
  </div>
</template>
<script setup>
defineProps({ amount: { type: Number, default: 249.00 } })
</script>
