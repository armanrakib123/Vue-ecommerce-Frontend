<template>
  <div class="max-w-4xl mx-auto py-8 px-4 space-y-6">
    <div>
      <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Notifications & Alerts</h1>
      <p class="text-xs text-slate-500">Live order milestones, security logs, and drops</p>
    </div>
    <NotificationCenter :notifications="notifications" @mark-read="markRead" @mark-all-read="markAllAsRead" />
  </div>
</template>
<script setup>
import NotificationCenter from '../components/NotificationCenter.vue'
import { useNotifications } from '../composables/useNotifications.js'
const { notifications, markRead, markAllAsRead } = useNotifications()
</script>
