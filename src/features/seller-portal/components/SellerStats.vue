<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    <div v-for="stat in stats" :key="stat.label" class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-1">
      <p class="text-xs text-slate-500 font-semibold">{{ stat.label }}</p>
      <h3 class="text-2xl font-black text-slate-900 dark:text-white font-display">{{ stat.value }}</h3>
      <p class="text-[11px] font-bold" :class="stat.trend === 'up' ? 'text-emerald-600' : 'text-slate-400'">{{ stat.change }} vs last cycle</p>
    </div>
  </div>
</template>
<script setup>
defineProps({ stats: Array })
</script>
