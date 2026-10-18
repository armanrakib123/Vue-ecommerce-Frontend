<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    <div v-for="kpi in kpis" :key="kpi.label" class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-1">
      <p class="text-xs text-slate-500 font-semibold">{{ kpi.label }}</p>
      <h3 class="text-2xl font-black text-slate-900 dark:text-white font-display">{{ kpi.value }}</h3>
      <p class="text-[11px] font-bold text-emerald-600">{{ kpi.change }} vs last period</p>
    </div>
  </div>
</template>
<script setup>
defineProps({ kpis: Array })
</script>
