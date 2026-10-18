<template>
  <div class="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 space-y-4">
    <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
      <h3 class="text-sm font-bold text-slate-900 dark:text-white font-display">Activity Stream</h3>
      <button class="text-xs font-semibold text-brand-600 hover:underline" @click="$emit('mark-all-read')">Mark all read</button>
    </div>
    <NotificationList :notifications="notifications" @mark-read="$emit('mark-read', $event)" />
  </div>
</template>
<script setup>
import NotificationList from './NotificationList.vue'
defineProps({ notifications: Array })
defineEmits(['mark-read', 'mark-all-read'])
</script>
