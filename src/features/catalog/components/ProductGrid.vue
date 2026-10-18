<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    <ProductCard v-for="p in products" :key="p.id" :product="p" @add-to-cart="$emit('add-to-cart', $event)" />
  </div>
</template>
<script setup>
import ProductCard from './ProductCard.vue'
defineProps({ products: Array })
defineEmits(['add-to-cart'])
</script>
