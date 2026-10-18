<template>
  <div class="grid grid-cols-2 gap-2 text-xs">
    <div v-for="s in specs" :key="s.key" class="p-2 rounded bg-slate-50 dark:bg-slate-800 flex justify-between">
      <span class="text-slate-400">{{ s.key }}</span>
      <span class="font-bold">{{ s.value }}</span>
    </div>
  </div>
</template>
<script setup>
defineProps({ specs: Array })
</script>
