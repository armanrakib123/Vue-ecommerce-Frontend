<template>
  <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4">
    <div class="flex items-center justify-between">
      <h3 class="text-sm font-bold text-slate-900 dark:text-white font-display">Sales Performance Curve</h3>
      <span class="text-xs font-mono font-bold text-emerald-600">+18.4% YoY</span>
    </div>
    <div class="h-48 flex items-end gap-2 pt-6">
      <div v-for="(v, i) in values" :key="i" class="flex-1 flex flex-col items-center gap-1 group">
        <div class="w-full bg-amber-400 group-hover:bg-amber-500 rounded-t-xl transition-all" :style="{ height: v + '%' }"></div>
        <span class="text-[9px] text-slate-400">{{ labels[i] }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
const values = [40, 55, 35, 70, 85, 95, 60, 80, 90, 75, 100, 88]
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
</script>
