<template>
  <div class="space-y-6">
    <div>
      <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Merchant Orders</h1>
      <p class="text-xs text-slate-500">Fulfillment station and courier dispatch</p>
    </div>
    <SellerOrderTable :orders="orders" />
  </div>
</template>
<script setup>
import { mockOrders } from '@/mocks/fixtures/orders.json.js'
import SellerOrderTable from '../components/SellerOrderTable.vue'
const orders = mockOrders
</script>
