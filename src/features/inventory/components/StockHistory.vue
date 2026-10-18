<template>
  <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-3">
    <h4 class="text-sm font-bold text-slate-900 dark:text-white font-display">30-Day Velocity</h4>
    <div class="h-24 flex items-end gap-1.5">
      <div v-for="n in 20" :key="n" class="flex-1 bg-brand-500/80 rounded-t" :style="{ height: (30 + (n * 7) % 65) + '%' }"></div>
    </div>
  </div>
</template>
<script setup></script>
