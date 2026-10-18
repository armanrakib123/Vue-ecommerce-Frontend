<template>
  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider" :class="statusClasses[status] || 'bg-slate-100 text-slate-700'">
    {{ status }}
  </span>
</template>
<script setup>
defineProps({ status: { type: String, default: 'open' } })
const statusClasses = {
  open: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400',
  pending: 'bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400',
  resolved: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
  urgent: 'bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400'
}
</script>
