<template>
  <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 overflow-hidden">
    <div class="p-6 border-b border-slate-100 dark:border-slate-800">
      <h3 class="text-base font-bold text-slate-900 dark:text-white font-display">Merchant Orders</h3>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full text-xs text-left">
        <thead class="bg-slate-50 dark:bg-slate-950/50 text-slate-500 uppercase text-[10px] font-bold">
          <tr>
            <th class="px-6 py-3">Order #</th>
            <th class="px-6 py-3">Date</th>
            <th class="px-6 py-3">Customer</th>
            <th class="px-6 py-3">Total</th>
            <th class="px-6 py-3">Fulfillment</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
          <tr v-for="o in orders" :key="o.id">
            <td class="px-6 py-4 font-mono font-bold text-brand-600">{{ o.orderNumber }}</td>
            <td class="px-6 py-4 text-slate-500">{{ o.createdAt.split('T')[0] }}</td>
            <td class="px-6 py-4 text-slate-900 dark:text-white font-semibold">{{ o.customer.name }}</td>
            <td class="px-6 py-4 font-bold font-mono">${{ o.total.toFixed(2) }}</td>
            <td class="px-6 py-4">
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-50 text-sky-600 dark:bg-sky-950/40 capitalize">{{ o.status }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
defineProps({ orders: Array })
</script>
