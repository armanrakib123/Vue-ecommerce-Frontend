<template>
  <div class="space-y-6">
    <div>
      <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Stock Movements Ledger</h1>
      <p class="text-xs text-slate-500">Immutable audit log of all picking, packing, transfers, and receiving</p>
    </div>
    <StockMovementTable :movements="movements" />
  </div>
</template>
<script setup>
import StockMovementTable from '../components/StockMovementTable.vue'
import { useStockMovements } from '../composables/useStockMovements.js'
const { movements } = useStockMovements()
</script>
