<template>
  <div
    :class="[
      'rounded-xl p-4 border flex items-start gap-3',
      alertStyles[type]
    ]"
  >
    <div class="flex-shrink-0 mt-0.5">
      <span v-if="type === 'success'" class="text-emerald-500 font-bold">✓</span>
      <span v-else-if="type === 'danger'" class="text-rose-500 font-bold">✕</span>
      <span v-else-if="type === 'warning'" class="text-amber-500 font-bold">!</span>
      <span v-else class="text-brand-500 font-bold">ℹ</span>
    </div>
    <div class="flex-1 text-sm">
      <h5 v-if="title" class="font-bold mb-0.5">{{ title }}</h5>
      <div class="text-slate-600 dark:text-slate-300">
        <slot>{{ message }}</slot>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  type: { type: String, default: 'info', validator: v => ['info', 'success', 'warning', 'danger'].includes(v) },
  title: { type: String, default: '' },
  message: { type: String, default: '' },
})

const alertStyles = {
  info: 'bg-brand-50/70 border-brand-200 text-brand-900 dark:bg-brand-950/40 dark:border-brand-800 dark:text-brand-200',
  success: 'bg-emerald-50/70 border-emerald-200 text-emerald-900 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-200',
  warning: 'bg-amber-50/70 border-amber-200 text-amber-900 dark:bg-amber-950/40 dark:border-amber-800 dark:text-amber-200',
  danger: 'bg-rose-50/70 border-rose-200 text-rose-900 dark:bg-rose-950/40 dark:border-rose-800 dark:text-rose-200',
}
</script>
