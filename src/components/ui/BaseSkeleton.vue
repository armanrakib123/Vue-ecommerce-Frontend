<template>
  <div
    :class="[
      'animate-pulse bg-slate-200 dark:bg-slate-800',
      roundedClasses[rounded],
      className
    ]"
    :style="{
      width: width ? (typeof width === 'number' ? `${width}px` : width) : '100%',
      height: height ? (typeof height === 'number' ? `${height}px` : height) : '1rem'
    }"
  />
</template>

<script setup>
defineProps({
  width: { type: [String, Number], default: null },
  height: { type: [String, Number], default: null },
  rounded: { type: String, default: 'md', validator: v => ['none', 'sm', 'md', 'lg', 'xl', 'full'].includes(v) },
  className: { type: String, default: '' },
})

const roundedClasses = {
  none: '',
  sm: 'rounded',
  md: 'rounded-lg',
  lg: 'rounded-xl',
  xl: 'rounded-2xl',
  full: 'rounded-full',
}
</script>
