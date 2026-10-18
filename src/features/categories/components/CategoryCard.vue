<template>
  <div class="p-4 rounded-2xl border bg-white dark:bg-slate-900">
    <h4 class="font-bold text-xs">{{ category.name }}</h4>
  </div>
</template>
<script setup>
defineProps({ category: Object })
</script>
