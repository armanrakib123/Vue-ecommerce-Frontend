<template>
  <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4">
    <div class="flex items-center justify-between">
      <h3 class="text-sm font-bold text-slate-900 dark:text-white font-display">Gross Margin & Net Profit</h3>
      <span class="text-xs font-bold text-indigo-500">64.2% Margin</span>
    </div>
    <div class="h-44 flex items-end gap-2 pt-4">
      <div v-for="n in 12" :key="n" class="flex-1 bg-gradient-to-t from-indigo-600 to-brand-500 rounded-t-lg" :style="{ height: (40 + (n * 5) % 55) + '%' }"></div>
    </div>
  </div>
</template>
<script setup></script>
