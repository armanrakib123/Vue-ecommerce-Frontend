<template>
  <div v-if="items.length" class="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 text-amber-900 dark:text-amber-200 flex items-center justify-between text-xs">
    <div class="flex items-center gap-2">
      <span class="font-bold">⚠️ Warning:</span>
      <span>{{ items.length }} items have fallen below reorder threshold.</span>
    </div>
    <span class="font-bold underline cursor-pointer">Review PO Queue</span>
  </div>
</template>
<script setup>
defineProps({ items: { type: Array, default: () => [] } })
</script>
