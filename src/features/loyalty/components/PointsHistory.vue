<template>
  <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4">
    <h3 class="text-sm font-bold text-slate-900 dark:text-white font-display">Points Activity History</h3>
    <div class="divide-y divide-slate-100 dark:divide-slate-800">
      <div v-for="item in history" :key="item.id" class="py-3 flex items-center justify-between text-xs">
        <div>
          <p class="font-bold text-slate-900 dark:text-white">{{ item.title }}</p>
          <p class="text-[10px] text-slate-400">{{ item.date }}</p>
        </div>
        <span class="font-mono font-bold" :class="item.points.startsWith('+') ? 'text-emerald-600' : 'text-slate-500'">
          {{ item.points }}
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({ history: Array })
</script>
