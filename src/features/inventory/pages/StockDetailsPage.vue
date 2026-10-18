<template>
  <div class="max-w-4xl mx-auto py-8 px-4 space-y-6">
    <RouterLink to="/admin/inventory" class="text-xs font-bold text-brand-600 hover:underline">← Back to Global Inventory</RouterLink>
    <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4">
      <h2 class="text-xl font-bold text-slate-900 dark:text-white">SKU: {{ $route.params.id || 'AUR-HP-001' }}</h2>
      <StockHistory />
    </div>
  </div>
</template>
<script setup>
import StockHistory from '../components/StockHistory.vue'
</script>
