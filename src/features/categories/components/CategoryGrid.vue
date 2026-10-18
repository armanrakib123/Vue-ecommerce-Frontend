<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <CategoryCard v-for="c in categories" :key="c.id" :category="c" />
  </div>
</template>
<script setup>
import CategoryCard from './CategoryCard.vue'
defineProps({ categories: Array })
</script>
