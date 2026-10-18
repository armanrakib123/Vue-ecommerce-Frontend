<template>
  <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4">
    <div class="flex items-center justify-between">
      <h3 class="text-sm font-bold text-slate-900 dark:text-white font-display">Revenue Velocity (Weekly)</h3>
      <span class="text-xs font-mono font-bold text-emerald-600">+22.4% MoM</span>
    </div>
    <div class="h-56 flex items-end gap-3 pt-6">
      <div v-for="(item, idx) in data" :key="idx" class="flex-1 flex flex-col items-center gap-1 group">
        <div class="w-full bg-brand-500 group-hover:bg-brand-600 rounded-t-xl transition-all" :style="{ height: (item.sales / 800) + '%' }"></div>
        <span class="text-[10px] text-slate-400">{{ item.period }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  data: {
    type: Array,
    default: () => [
      { period: 'W1', sales: 48200 },
      { period: 'W2', sales: 54100 },
      { period: 'W3', sales: 62400 },
      { period: 'W4', sales: 71200 }
    ]
  }
})
</script>
