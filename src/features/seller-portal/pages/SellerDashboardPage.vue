<template>
  <div class="space-y-8">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Merchant Overview</h1>
        <p class="text-xs text-slate-500">Telemetry, fulfillment speed, and revenue metrics</p>
      </div>
      <SellerVerificationStatus />
    </div>
    <SellerStats :stats="stats" />
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2">
        <SellerRevenueChart />
      </div>
      <div class="lg:col-span-1">
        <SellerPayoutSummary />
      </div>
    </div>
    <SellerProductTable :products="recentProducts" />
    <SellerOrderTable :orders="recentOrders" />
  </div>
</template>
<script setup>
import SellerStats from '../components/SellerStats.vue'
import SellerVerificationStatus from '../components/SellerVerificationStatus.vue'
import SellerRevenueChart from '../components/SellerRevenueChart.vue'
import SellerPayoutSummary from '../components/SellerPayoutSummary.vue'
import SellerProductTable from '../components/SellerProductTable.vue'
import SellerOrderTable from '../components/SellerOrderTable.vue'
import { useSellerDashboard } from '../composables/useSellerDashboard.js'

const { stats, recentProducts, recentOrders } = useSellerDashboard()
</script>
