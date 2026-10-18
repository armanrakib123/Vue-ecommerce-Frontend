<template>
  <div class="space-y-4">
    <h3 class="text-base font-bold">Related Hardware</h3>
    <ProductGrid :products="products" />
  </div>
</template>
<script setup>
import ProductGrid from './ProductGrid.vue'
defineProps({ products: Array })
</script>
