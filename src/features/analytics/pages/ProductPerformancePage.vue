<template>
  <div class="space-y-6">
    <div>
      <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Product Performance Matrix</h1>
      <p class="text-xs text-slate-500">SKU contribution margins and inventory turnover speed</p>
    </div>
    <TopProductsTable :products="topProducts" />
  </div>
</template>
<script setup>
import TopProductsTable from '../components/TopProductsTable.vue'
import { useAnalytics } from '../composables/useAnalytics.js'
const { topProducts } = useAnalytics()
</script>
