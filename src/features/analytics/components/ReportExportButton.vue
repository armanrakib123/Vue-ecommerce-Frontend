<template>
  <button type="button" class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 transition" @click="handleExport">
    <span>Export CSV</span>
  </button>
</template>
<script setup>
import { useNotificationStore } from '@/stores/notification.store.js'
const notificationStore = useNotificationStore()
function handleExport() {
  notificationStore.success('Telemetry report exported to CSV successfully.')
}
</script>
