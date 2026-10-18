<template>
  <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
    <div class="flex items-center justify-between">
      <span class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{{ title }}</span>
      <div v-if="$slots.icon" class="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 flex items-center justify-center">
        <slot name="icon" />
      </div>
    </div>
    <div class="mt-4 flex items-baseline justify-between">
      <div class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
        {{ value }}
      </div>
      <div v-if="change !== undefined" :class="['text-xs font-semibold flex items-center gap-1', isPositive ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400']">
        <span>{{ isPositive ? '↑' : '↓' }} {{ Math.abs(change) }}%</span>
        <span class="text-slate-400 font-normal">vs last mo</span>
      </div>
    </div>
    <p v-if="description" class="mt-2 text-xs text-slate-500">{{ description }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  value: { type: [String, Number], required: true },
  change: { type: Number, default: undefined },
  description: { type: String, default: '' },
})

const isPositive = computed(() => (props.change ?? 0) >= 0)
</script>
