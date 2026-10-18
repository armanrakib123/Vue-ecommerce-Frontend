<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold mb-6">Catalog</h1>
    <ProductGrid :products="products" />
  </div>
</template>
<script setup>
import { useProducts } from '../composables/useProducts.js'
import ProductGrid from '../components/ProductGrid.vue'
const { products } = useProducts()
</script>
