<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Product Catalog</h1>
        <p class="text-xs text-slate-500">Manage catalog SKUs, inventory, and variant prices</p>
      </div>
      <RouterLink to="/seller/products/new" class="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs">+ Add Product</RouterLink>
    </div>
    <SellerProductTable :products="products" />
  </div>
</template>
<script setup>
import { mockProducts } from '@/mocks/fixtures/products.json.js'
import SellerProductTable from '../components/SellerProductTable.vue'
const products = mockProducts
</script>
