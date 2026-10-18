<template>
  <div class="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 space-y-6">
    <div class="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
      <div>
        <p class="text-[10px] uppercase font-bold text-slate-400">Waybill #</p>
        <h4 class="text-base font-black text-slate-900 dark:text-white font-display">{{ trackingNumber }}</h4>
      </div>
      <span class="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-300">
        {{ carrier }}
      </span>
    </div>
    <TrackingTimeline :timeline="events" />
  </div>
</template>
<script setup>
import TrackingTimeline from './TrackingTimeline.vue'
defineProps({
  trackingNumber: { type: String, default: 'FX-8942-2026-US' },
  carrier: { type: String, default: 'FedEx Express' },
  events: {
    type: Array,
    default: () => [
      { status: 'Out for Local Delivery', location: 'San Francisco, CA', time: '08:30 AM' },
      { status: 'Arrived at Sort Facility', location: 'Oakland, CA', time: '03:15 AM' },
      { status: 'Electronic Shipping Info Received', location: 'Dispatch Center', time: 'Yesterday' }
    ]
  }
})
</script>
