<template>
  <div class="space-y-6">
    <div class="border-b border-slate-200 dark:border-slate-800 pb-4">
      <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Attribution & Channel Performance</h1>
      <p class="text-xs text-slate-500">First-touch vs last-touch marketing attribution model metrics</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <StatCard title="Blended ROAS" value="5.4x" :change="11.2" description="Return on Ad Spend" />
      <StatCard title="CAC (Blended)" value="$32.40" :change="-6.5" description="Customer Acquisition Cost" />
      <StatCard title="Newsletter Signups" value="8,420" :change="24.0" description="High intent subscriber list" />
    </div>
  </div>
</template>

<script setup>
import StatCard from '@/components/data-display/StatCard.vue'
</script>
