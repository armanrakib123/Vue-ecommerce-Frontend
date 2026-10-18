<template>
  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold" :class="badgeClass">
    {{ label }}
  </span>
</template>
<script setup>
import { computed } from 'vue'
const props = defineProps({ stock: Number, reorder: { type: Number, default: 20 } })
const label = computed(() => {
  if (props.stock <= 0) return 'Out of Stock'
  if (props.stock <= props.reorder) return 'Low Stock'
  return 'In Stock'
})
const badgeClass = computed(() => {
  if (props.stock <= 0) return 'bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400'
  if (props.stock <= props.reorder) return 'bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400'
  return 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400'
})
</script>
