<template>
  <span
    :class="[
      'inline-flex items-center font-medium rounded-full',
      sizeClasses[size],
      variantClasses[variant]
    ]"
  >
    <span v-if="dot" class="w-1.5 h-1.5 rounded-full mr-1.5" :class="dotColorClasses[variant]" />
    <slot />
  </span>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'neutral',
    validator: v => ['neutral', 'primary', 'success', 'warning', 'danger', 'info'].includes(v)
  },
  size: {
    type: String,
    default: 'sm',
    validator: v => ['xs', 'sm', 'md'].includes(v)
  },
  dot: { type: Boolean, default: false }
})

const sizeClasses = {
  xs: 'text-[10px] px-2 py-0.5',
  sm: 'text-xs px-2.5 py-0.5',
  md: 'text-sm px-3 py-1',
}

const variantClasses = {
  neutral: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
  primary: 'bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300 border border-brand-200/50 dark:border-brand-800/50',
  success: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200/50 dark:border-emerald-800/50',
  warning: 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300 border border-amber-200/50 dark:border-amber-800/50',
  danger: 'bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300 border border-rose-200/50 dark:border-rose-800/50',
  info: 'bg-sky-50 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300 border border-sky-200/50 dark:border-sky-800/50',
}

const dotColorClasses = {
  neutral: 'bg-slate-500',
  primary: 'bg-brand-500',
  success: 'bg-emerald-500',
  warning: 'bg-amber-500',
  danger: 'bg-rose-500',
  info: 'bg-sky-500',
}
</script>
