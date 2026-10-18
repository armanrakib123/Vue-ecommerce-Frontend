<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Detailed Sales Ledger</h1>
        <p class="text-xs text-slate-500">Historical cohort breakdowns and accounting reconciliation</p>
      </div>
      <ReportExportButton />
    </div>
    <SalesChart />
  </div>
</template>
<script setup>
import SalesChart from '../components/SalesChart.vue'
import ReportExportButton from '../components/ReportExportButton.vue'
</script>
