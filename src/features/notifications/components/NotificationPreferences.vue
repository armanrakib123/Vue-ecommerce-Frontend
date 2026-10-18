<template>
  <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4">
    <h3 class="text-sm font-bold text-slate-900 dark:text-white font-display">Channels & Notification Preferences</h3>
    <div class="space-y-3">
      <label class="flex items-center justify-between text-xs cursor-pointer">
        <span>Order Status Updates (Email & SMS)</span>
        <input type="checkbox" v-model="form.emailOrders" class="rounded text-brand-600" />
      </label>
      <label class="flex items-center justify-between text-xs cursor-pointer">
        <span>Curated Hardware Drops & Flash Promotions</span>
        <input type="checkbox" v-model="form.emailMarketing" class="rounded text-brand-600" />
      </label>
      <label class="flex items-center justify-between text-xs cursor-pointer">
        <span>Real-time Security Alerts</span>
        <input type="checkbox" v-model="form.smsAlerts" class="rounded text-brand-600" />
      </label>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const props = defineProps({ preferences: Object })
const form = ref({ ...props.preferences })
</script>
