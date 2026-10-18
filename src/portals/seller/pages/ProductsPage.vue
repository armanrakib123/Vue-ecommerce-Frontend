<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
      <div>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Merchant Catalog Listings</h1>
        <p class="text-xs text-slate-500">Products sold under AuraTech Sound & Gear</p>
      </div>
      <RouterLink to="/seller/products/new" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl font-bold text-xs shadow-sm transition">
        + Add New Product
      </RouterLink>
    </div>

    <DataTable :columns="columns" :rows="sellerProducts">
      <template #product="{ row }">
        <div class="flex items-center gap-3">
          <img :src="row.thumbnail" class="w-10 h-10 rounded-xl object-cover" />
          <div>
            <p class="text-xs font-bold text-slate-900 dark:text-white">{{ row.name }}</p>
            <p class="text-[10px] text-slate-400 font-mono">{{ row.sku }}</p>
          </div>
        </div>
      </template>

      <template #price="{ row }">
        <span class="font-bold text-xs">{{ formatCurrency(row.price) }}</span>
      </template>

      <template #stockQuantity="{ row }">
        <span class="text-xs font-semibold">{{ row.stockQuantity }} units</span>
      </template>

      <template #actions="{ row }">
        <RouterLink :to="`/seller/products/${row.id}/edit`" class="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline">
          Edit Listing →
        </RouterLink>
      </template>
    </DataTable>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { mockProducts } from '@/mocks/fixtures/products.json.js'
import { formatCurrency } from '@/utils/format-currency.js'
import DataTable from '@/components/data-display/DataTable.vue'

const sellerProducts = ref(mockProducts.slice(0, 3))

const columns = [
  { key: 'product', label: 'Item & SKU' },
  { key: 'price', label: 'List Price' },
  { key: 'stockQuantity', label: 'Warehouse Stock' },
  { key: 'actions', label: 'Management', align: 'right' }
]
</script>
