<template>
  <div class="space-y-4">
    <h3 class="text-xl font-black text-slate-900 dark:text-white font-display">{{ title }}</h3>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <slot />
    </div>
  </div>
</template>
<script setup>
defineProps({ title: { type: String, default: 'Curated Collection' } })
</script>
