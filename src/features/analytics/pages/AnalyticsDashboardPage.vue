<template>
  <div class="space-y-8">
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Executive Analytics & Intelligence</h1>
        <p class="text-xs text-slate-500">Cross-channel GMV, margin telemetry, and unit economics</p>
      </div>
      <div class="flex items-center gap-3">
        <DateRangePicker v-model="selectedRange" />
        <ReportExportButton />
      </div>
    </div>
    <AnalyticsOverview :kpis="kpis" />
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <SalesChart />
      <RevenueChart />
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <OrdersChart />
      <ConversionChart />
    </div>
    <TopProductsTable :products="topProducts" />
  </div>
</template>
<script setup>
import DateRangePicker from '../components/DateRangePicker.vue'
import ReportExportButton from '../components/ReportExportButton.vue'
import AnalyticsOverview from '../components/AnalyticsOverview.vue'
import SalesChart from '../components/SalesChart.vue'
import RevenueChart from '../components/RevenueChart.vue'
import OrdersChart from '../components/OrdersChart.vue'
import ConversionChart from '../components/ConversionChart.vue'
import TopProductsTable from '../components/TopProductsTable.vue'
import { useAnalytics } from '../composables/useAnalytics.js'
import { useDateRange } from '../composables/useDateRange.js'

const { kpis, topProducts } = useAnalytics()
const { selectedRange } = useDateRange()
</script>
