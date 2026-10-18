<template>
  <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 overflow-hidden">
    <div class="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
      <h3 class="text-base font-bold text-slate-900 dark:text-white font-display">Merchant Listings</h3>
      <RouterLink to="/seller/products/new" class="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs">+ Add Product</RouterLink>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full text-xs text-left">
        <thead class="bg-slate-50 dark:bg-slate-950/50 text-slate-500 uppercase text-[10px] font-bold">
          <tr>
            <th class="px-6 py-3">Product</th>
            <th class="px-6 py-3">SKU</th>
            <th class="px-6 py-3">Price</th>
            <th class="px-6 py-3">Stock</th>
            <th class="px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
          <tr v-for="p in products" :key="p.id">
            <td class="px-6 py-4 flex items-center gap-3">
              <img :src="p.thumbnail" class="w-9 h-9 rounded-xl object-cover" />
              <span class="font-bold text-slate-900 dark:text-white">{{ p.name }}</span>
            </td>
            <td class="px-6 py-4 font-mono text-slate-500">{{ p.sku }}</td>
            <td class="px-6 py-4 font-bold text-slate-900 dark:text-white">${{ p.price.toFixed(2) }}</td>
            <td class="px-6 py-4 font-bold" :class="p.stockOnHand < 10 ? 'text-rose-500' : 'text-slate-700 dark:text-slate-300'">{{ p.stockOnHand || 45 }}</td>
            <td class="px-6 py-4">
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40">Active</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
defineProps({ products: Array })
</script>
