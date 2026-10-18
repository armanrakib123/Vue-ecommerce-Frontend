<template>
  <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 overflow-hidden">
    <div class="p-6 border-b border-slate-100 dark:border-slate-800">
      <h3 class="text-sm font-bold text-slate-900 dark:text-white font-display">Inventory Movement Audit Ledger</h3>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full text-xs text-left">
        <thead class="bg-slate-50 dark:bg-slate-950/50 text-slate-500 uppercase text-[10px] font-bold">
          <tr>
            <th class="px-6 py-3">Timestamp</th>
            <th class="px-6 py-3">SKU</th>
            <th class="px-6 py-3">Adjustment</th>
            <th class="px-6 py-3">Type</th>
            <th class="px-6 py-3">Operator</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
          <tr v-for="m in movements" :key="m.id">
            <td class="px-6 py-3 text-slate-500">{{ m.time }}</td>
            <td class="px-6 py-3 font-mono font-bold">{{ m.sku }}</td>
            <td class="px-6 py-3 font-mono font-bold" :class="m.delta > 0 ? 'text-emerald-600' : 'text-rose-500'">{{ m.delta > 0 ? '+' + m.delta : m.delta }}</td>
            <td class="px-6 py-3 text-slate-600 dark:text-slate-400">{{ m.type }}</td>
            <td class="px-6 py-3 text-slate-500">{{ m.user }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
defineProps({ movements: Array })
</script>
