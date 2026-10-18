<template>
  <ul class="space-y-1">
    <li v-for="c in categories" :key="c.id" class="text-xs font-semibold">{{ c.name }}</li>
  </ul>
</template>
<script setup>
defineProps({ categories: Array })
</script>
