<template>
  <div class="inline-flex rounded-xl p-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 text-xs">
    <button
      v-for="r in ranges"
      :key="r.value"
      type="button"
      class="px-3 py-1.5 rounded-lg font-semibold transition"
      :class="modelValue === r.value ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'"
      @click="$emit('update:modelValue', r.value)"
    >
      {{ r.label }}
    </button>
  </div>
</template>
<script setup>
defineProps({ modelValue: { type: String, default: '30d' } })
defineEmits(['update:modelValue'])
const ranges = [
  { label: '7D', value: '7d' },
  { label: '30D', value: '30d' },
  { label: 'QTD', value: 'qtd' },
  { label: 'YTD', value: 'ytd' }
]
</script>
