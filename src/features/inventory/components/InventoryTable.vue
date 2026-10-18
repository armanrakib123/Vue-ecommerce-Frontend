<template>
  <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 overflow-hidden">
    <div class="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
      <h3 class="text-base font-bold text-slate-900 dark:text-white font-display">Global Warehousing Stock Control</h3>
      <WarehouseSelector v-model="selectedWh" />
    </div>
    <div class="overflow-x-auto">
      <table class="w-full text-xs text-left">
        <thead class="bg-slate-50 dark:bg-slate-950/50 text-slate-500 uppercase text-[10px] font-bold">
          <tr>
            <th class="px-6 py-3">Product Name</th>
            <th class="px-6 py-3">SKU</th>
            <th class="px-6 py-3">On Hand</th>
            <th class="px-6 py-3">Allocated</th>
            <th class="px-6 py-3">Available</th>
            <th class="px-6 py-3">Status</th>
            <th class="px-6 py-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
          <tr v-for="item in inventory" :key="item.sku">
            <td class="px-6 py-4 font-bold text-slate-900 dark:text-white">{{ item.name }}</td>
            <td class="px-6 py-4 font-mono text-slate-500">{{ item.sku }}</td>
            <td class="px-6 py-4 font-mono font-bold">{{ item.stockOnHand }}</td>
            <td class="px-6 py-4 font-mono text-slate-400">{{ item.allocated }}</td>
            <td class="px-6 py-4 font-mono font-bold text-brand-600">{{ item.available }}</td>
            <td class="px-6 py-4">
              <StockLevelBadge :stock="item.stockOnHand" :reorder="item.reorderPoint" />
            </td>
            <td class="px-6 py-4 text-right">
              <button class="text-xs font-bold text-brand-600 hover:underline" @click="$emit('adjust', item)">
                Adjust
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import WarehouseSelector from './WarehouseSelector.vue'
import StockLevelBadge from './StockLevelBadge.vue'
defineProps({ inventory: Array })
defineEmits(['adjust'])
const selectedWh = ref('all')
</script>
