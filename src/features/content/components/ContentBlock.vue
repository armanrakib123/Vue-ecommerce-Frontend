<template>
  <div class="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-3">
    <h3 class="text-lg font-bold text-slate-900 dark:text-white font-display">{{ block.title }}</h3>
    <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{{ block.body }}</p>
  </div>
</template>
<script setup>
defineProps({ block: Object })
</script>
