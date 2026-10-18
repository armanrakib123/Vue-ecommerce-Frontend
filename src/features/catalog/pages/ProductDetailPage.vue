<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold">{{ product.name }}</h1>
    <p class="text-xs text-slate-500 mt-2">{{ product.tagline }}</p>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
import { useProduct } from '../composables/useProduct.js'
const route = useRoute()
const { product } = useProduct(route.params.slug)
</script>
