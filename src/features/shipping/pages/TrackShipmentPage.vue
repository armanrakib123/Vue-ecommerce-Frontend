<template>
  <div class="max-w-3xl mx-auto py-8 px-4 space-y-6">
    <div>
      <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Track Your Shipment</h1>
      <p class="text-xs text-slate-500">Live courier telemetry & delivery verification</p>
    </div>
    <div class="flex gap-2">
      <input v-model="trackQuery" type="text" placeholder="Enter tracking or order number..." class="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs" />
      <button class="px-5 py-2.5 rounded-xl bg-brand-600 text-white text-xs font-bold" @click="handleTrack">Track</button>
    </div>
    <ShipmentTracking :tracking-number="trackQuery || 'FX-8942-2026-US'" />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import ShipmentTracking from '../components/ShipmentTracking.vue'
const trackQuery = ref('FX-8942-2026-US')
function handleTrack() {}
</script>
