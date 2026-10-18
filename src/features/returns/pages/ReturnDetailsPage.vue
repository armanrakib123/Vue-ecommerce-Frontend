<template>
  <div class="max-w-3xl mx-auto py-8 px-4 space-y-6">
    <RouterLink to="/account/returns" class="text-xs font-bold text-brand-600 hover:underline">← Back to Returns</RouterLink>
    <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4">
      <div class="flex justify-between items-center">
        <h2 class="text-base font-bold text-slate-900 dark:text-white">RMA #{{ $route.params.id || '2026-0418' }}</h2>
        <ReturnStatus status="authorized" />
      </div>
      <ReturnTimeline />
      <RefundSummary :amount="249.00" />
    </div>
  </div>
</template>
<script setup>
import ReturnStatus from '../components/ReturnStatus.vue'
import ReturnTimeline from '../components/ReturnTimeline.vue'
import RefundSummary from '../components/RefundSummary.vue'
</script>
