<template>
  <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 overflow-hidden">
    <div class="p-6 border-b border-slate-100 dark:border-slate-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white font-display">Flagship Product Performance</h3>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full text-xs text-left">
        <thead class="bg-slate-50 dark:bg-slate-950/50 text-slate-500 uppercase text-[10px] font-bold">
          <tr>
            <th class="px-6 py-3">Product</th>
            <th class="px-6 py-3">Gross Revenue</th>
            <th class="px-6 py-3">Units Sold</th>
            <th class="px-6 py-3">Conversion Rate</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
          <tr v-for="p in products" :key="p.name">
            <td class="px-6 py-4 font-bold text-slate-900 dark:text-white">{{ p.name }}</td>
            <td class="px-6 py-4 font-mono font-bold text-brand-600">${{ p.revenue.toLocaleString() }}</td>
            <td class="px-6 py-4 font-mono">{{ p.units }}</td>
            <td class="px-6 py-4 font-bold text-emerald-600">{{ p.conversion }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
defineProps({ products: Array })
</script>
