<template>
  <div class="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 space-y-6 py-2">
    <div v-for="(event, idx) in timeline" :key="idx" class="relative pl-6">
      <span class="absolute -left-2 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-slate-900" :class="idx === 0 ? 'bg-brand-600 ring-4 ring-brand-100 dark:ring-brand-950' : 'bg-slate-300 dark:bg-slate-700'"></span>
      <p class="text-xs font-bold text-slate-900 dark:text-white">{{ event.status }}</p>
      <p class="text-[11px] text-slate-500">{{ event.location }} • {{ event.time }}</p>
    </div>
  </div>
</template>
<script setup>
defineProps({ timeline: { type: Array, default: () => [] } })
</script>
