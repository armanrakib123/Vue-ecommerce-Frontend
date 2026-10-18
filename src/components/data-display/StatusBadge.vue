<template>
  <span
    :class="[
      'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold capitalize tracking-wide',
      statusClass
    ]"
  >
    <span class="w-1.5 h-1.5 rounded-full" :class="dotClass" />
    {{ formattedStatus }}
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  status: { type: String, required: true },
})

const formattedStatus = computed(() => {
  return props.status.replace(/_/g, ' ')
})

const statusClass = computed(() => {
  const s = props.status.toLowerCase()
  if (['delivered', 'paid', 'resolved', 'active', 'in_stock', 'confirmed'].includes(s)) {
    return 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200/50'
  }
  if (['shipped', 'in_transit', 'processing', 'picked', 'packed'].includes(s)) {
    return 'bg-sky-50 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300 border border-sky-200/50'
  }
  if (['pending', 'open', 'low_stock'].includes(s)) {
    return 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300 border border-amber-200/50'
  }
  if (['cancelled', 'failed', 'refunded', 'out_of_stock'].includes(s)) {
    return 'bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300 border border-rose-200/50'
  }
  return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
})

const dotClass = computed(() => {
  const s = props.status.toLowerCase()
  if (['delivered', 'paid', 'resolved', 'active', 'in_stock', 'confirmed'].includes(s)) {
    return 'bg-emerald-500'
  }
  if (['shipped', 'in_transit', 'processing', 'picked', 'packed'].includes(s)) {
    return 'bg-sky-500'
  }
  if (['pending', 'open', 'low_stock'].includes(s)) {
    return 'bg-amber-500'
  }
  if (['cancelled', 'failed', 'refunded', 'out_of_stock'].includes(s)) {
    return 'bg-rose-500'
  }
  return 'bg-slate-400'
})
</script>
