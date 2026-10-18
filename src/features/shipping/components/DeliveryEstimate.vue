<template>
  <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs">
    <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
    </svg>
    <span>Estimated Delivery: <strong class="text-slate-900 dark:text-white">{{ estimate || '3-5 Business Days' }}</strong></span>
  </div>
</template>
<script setup>
defineProps({ estimate: String })
</script>
