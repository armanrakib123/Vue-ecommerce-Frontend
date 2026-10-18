<template>
  <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-3">
    <h4 class="text-sm font-bold text-slate-900 dark:text-white font-display">Order Volume Flow</h4>
    <div class="h-36 flex items-end gap-2">
      <div v-for="n in 8" :key="n" class="flex-1 bg-sky-500 rounded-t-lg" :style="{ height: (30 + (n * 9) % 65) + '%' }"></div>
    </div>
  </div>
</template>
<script setup></script>
