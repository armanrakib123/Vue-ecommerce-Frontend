<template>
  <div class="space-y-1 text-xs">
    <div v-for="c in categories" :key="c.id" class="p-1 font-bold">{{ c.name }}</div>
  </div>
</template>
<script setup>
defineProps({ categories: Array })
</script>
