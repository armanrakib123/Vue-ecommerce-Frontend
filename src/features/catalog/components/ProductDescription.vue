<template>
  <div class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{{ description }}</div>
</template>
<script setup>
defineProps({ description: String })
</script>
