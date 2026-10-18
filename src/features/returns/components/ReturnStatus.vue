<template>
  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider" :class="classes[status] || 'bg-slate-100 text-slate-700'">
    {{ status }}
  </span>
</template>
<script setup>
defineProps({ status: { type: String, default: 'requested' } })
const classes = {
  requested: 'bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400',
  authorized: 'bg-sky-50 text-sky-600 dark:bg-sky-950/40 dark:text-sky-400',
  received: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400',
  refunded: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400',
  rejected: 'bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400'
}
</script>
